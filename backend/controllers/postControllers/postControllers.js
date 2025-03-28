import sharp from "sharp";
import cloudinary from "cloudinary";
import Post from "../../models/Post.js";
import { User } from "../../models/user_model.js";


export const addNewPost = async (req, res) => {
    try {
        const {caption} = req.body;
        const image = req.file;
        const authorId = req.id;
        
        if (!image) {
            return res.status(400).json({
                msg: "Please upload an image",
                // success: false,
            });
        }

        const optimizedImageBuffer = await sharp(image.buffer)
        .resize({width:800, height:800, fit:'inside'})
        .toFormat('jpeg', {quality: 80})
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
        if (user){
            user.posts.push(post._id);
            await user.save();
        }

        await post.populatr({path:"author", select: "-password"});
        return res.status(200).json({
            msg: "Post created successfully",
            success: true,
            post,
        });

    } catch (error) {
        console.log(error);
    }
}