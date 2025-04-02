import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { addNewPost, getAllPosts, getUserPosts, toggleLikePost, addComment, getCommentOfPost, deletePost, bookmarkPost} from '../controllers/postControllers/postControllers.js';
import upload from '../middlewares/multer.js';
// import { getAllComments } from '../controllers/commentControllers/commentControllers.js';



const router = express.Router();

// Định nghĩa các endpoint
router.route('/addpost').post(isAuthenticated, upload.single('image'), addNewPost); // POST /api/v1/post/addpost
router.route('/all').get(isAuthenticated, getAllPosts); // GET /api/v1/post/getallposts
router.route('/userpost/all').get(isAuthenticated, getAllPosts); // GET /api/v1/post/userpost/all
router.route('/:id/like').get(isAuthenticated, toggleLikePost); // GET /api/v1/post/:id/like
router.route("/:id/comment").post(isAuthenticated, addComment); // GET /api/v1/post/:id/comment
router.route("/:id/comment/all").get(isAuthenticated, getCommentOfPost); // GET /api/v1/post/:id/comment/all
router.route("/delete/:id").post(isAuthenticated, deletePost); // DELETE /api/v1/post/delete/:id
router.route("/:id/bookmark").post(isAuthenticated, bookmarkPost); // GET /api/v1/post/:id/bookmark

export default router;