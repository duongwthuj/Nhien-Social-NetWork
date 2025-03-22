import express from 'express';
import { register } from '../controllers/userControllers/authController.js';
import { get } from 'mongoose';
import { editProfile, followOrUnfollow, getProfile, getSuggestFriends } from '../controllers/userControllers/userControllers.js';
import { login, logout } from '../controllers/userControllers/authController.js';
import  isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../middlewares/multer.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/:id/profile').get(isAuthenticated, getProfile);
router.route('/profile/edit').post(isAuthenticated, upload.single('profilePhoto'), editProfile);
router.route('/suggested').get(isAuthenticated, getSuggestFriends);
router.route('/followorunfollow/:id').post(isAuthenticated, followOrUnfollow);

export default router;