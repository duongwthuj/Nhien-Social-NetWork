import sharp from "sharp";
import cloudinary from "cloudinary";
import Post from "../../models/Post.js";
import { User } from "../../models/user_model.js";


export const addNewPost = async (req, res) => {
    try {
        const { caption } = req.body;
        const image = req.file;
        const authorId = req.id;

        if (!image) {
            return res.status(400).json({
                msg: "Please upload an image",
                // success: false,
            });
        }

        const optimizedImageBuffer = await sharp(image.buffer)
            .resize({ width: 800, height: 800, fit: 'inside' })
            .toFormat('jpeg', { quality: 80 })
            .toBuffer();

        // buffer to data uri
        const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString('base64')}`;
        const cloundRespone = await cloudinary.uploader.upload(fileUri);
        const post = await Post.create({
            caption,
            image: cloundRespone.secure_url,
            author: authorId,
        });
        const user = await User.findById(authorId).select("-password");
        if (user) {
            user.posts.push(post._id);
            await user.save();
        }

        await post.populate({ path: "author", select: "-password" });
        return res.status(200).json({
            msg: "Post created successfully",
            success: true,
            post,
        });

    } catch (error) {
        console.log(error);
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
            .populate({ path: "author", select: "username profilePicture" })
            .populate({
                path: 'comments',
                sort: { createdAt: -1 },
                populate: {
                    path: 'author',
                    select: 'username, profilePicture'
                }
            });

        return res.status(200).json({
            msg: "Posts found",
            success: true,
            posts: posts,
            // posts: updatedPosts,
        });
    } catch (error) {
        console.log(error);

    }
}


export const getUserPosts = async (req, res) => {
    try {
        const authorId = req.id;
        const posts = await Post.find({ author: authorId }).sort({ createdAt: -1 })
            .populate({
                path: "author",
                select: "username profilePicture"
            }).populate({
                path: 'comments',
                sort: { createdAt: -1 },
                populate: {
                    path: 'author',
                    select: 'username profilePicture'
                }
            });

        return res.status(200).json({
            // msg: "Posts found",
            success: true,
            posts
        });

    } catch (error) {
        console.log(error);
    }
}


export const toggleLikePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.id;

        // Tìm bài viết
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                msg: "Post not found",
                success: false,
            });
        }

        // Kiểm tra xem user đã like hay chưa
        const hasLiked = post.likes.includes(userId);

        if (hasLiked) {
            // Nếu đã like -> Bỏ like
            await post.updateOne({ $pull: { likes: userId } });
        } else {
            // Nếu chưa like -> Thêm like
            await post.updateOne({ $addToSet: { likes: userId } });
        }

        // implement socketio for real time notification

        return res.status(200).json({
            msg: hasLiked ? "Post unliked successfully" : "Post liked successfully",
            success: true,
            liked: !hasLiked, // Trạng thái like sau khi cập nhật
        });

    } catch (error) {
        console.error(error);
    }
};

export const addComment = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.id;
        const { text } = req.body;

        // Tìm bài viết
        const post = await Post.findById(postId);
        if (!text){
            return res.status(400).json({
                msg: "Please add a comment",
                success: false,
            });
        }

        if (!post) {
            return res.status(404).json({
                msg: "Post not found",
                success: false,
            });
        }

        const comment = await Comment.create({
            text,
            author: userId,
            post: postId,
        }).populate({
            path: 'author',
            select: 'username profilePicture'
        });

        // Thêm comment vào bài viết
        post.comments.push(comment._id);
        await post.save();

        return res.status(200).json({
            msg: "Comment added successfully",
            success: true,
            comment,
        });

    } catch (error) {
        console.log(error);
        
    }
}


export const getCommentOfPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const comments = await Post.find({post: postId}).populate({
            'author': 'username profilePicture' 
        })

        if (!comments){
            return res.status(404).json({
                msg: "No comments found",
                success: false,
            });
        }

        return res.status(200).json({
            success: true,
            comments,
        })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const authorId = req.id;

        const post = await Post.findById(postId);
        if (!post){
            return res.status(404).json({
                msg: "Post not found",
                success: false,
            });
        }
        if (post.author.toString() !== authorId){
            return res.status(403).json({
                msg: "You are not authorized to delete this post",
                success: false,
            });
        }

        await Post.findByIdAndDelete(postId);

        // Xóa bài viết khỏi danh sách bài viết của người dùng 
        let user = await User.findById(authorId);
        user.posts = user.posts.filter(id => id.toString() !== postId);
        await user.save();

        await Comment.deleteMany({ post: postId });

        return res.status(200).json({
            msg: "Post deleted successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
}

export const bookmarkPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const authorId = req.id;
        const post = await Post.findById(postId);
        if (!post){
            return res.status(404).json({
                msg: "Post not found",
                success: false,
            });
        }
        const user = await User.findById(authorId);
        if (user.bookmarks.includes(postId)){
            await user.updateOne({$pull: {bookmarks: postId}});
            await user.save();
            return res.status(200).json({
                msg: "Post removed from bookmarks",
                success: true,
            });
        } else {
            await user.updateOne({$addToSet: {bookmarks: postId}});
            await user.save();
            return res.status(200).json({
                msg: "Post added to bookmarks",
                success: true,
            });

        }
    } catch (error) {
        console.log(error);
    }
}