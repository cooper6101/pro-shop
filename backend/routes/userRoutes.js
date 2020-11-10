import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// Authenticate user and get token
router.post('/login', authUser);

// Register new user
router.route('/').post(registerUser);

// Get user profile
router.route('/profile').get(protect, getUserProfile);

export default router;
