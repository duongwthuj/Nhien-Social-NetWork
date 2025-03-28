import express from 'express';
import { register, login, logout } from '../controllers/userControllers/authController.js';
import { editProfile, followOrUnfollow, getProfile, getSuggestFriends } from '../controllers/userControllers/userControllers.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

// Định nghĩa các endpoint
router.route('/register').post(register); // POST /api/v1/user/register
router.route('/login').post(login); // POST /api/v1/user/login
router.route('/logout').get(logout); // GET /api/v1/user/logout
router.route('/:id/profile').get(isAuthenticated, getProfile); // GET /api/v1/user/:id/profile
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile); // POST /api/v1/user/profile/edit
router.route('/suggested').get(isAuthenticated, getSuggestFriends); // GET /api/v1/user/suggested
router.route('/followorunfollow/:id').post(isAuthenticated, followOrUnfollow); // POST /api/v1/user/followorunfollow/:id

export default router;