import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById
} from '../controllers/productController.js';

// Get All Products
router.route('/').get(getProducts);

// Get Product By Id
router.route('/:id').get(getProductById);

export default router;
