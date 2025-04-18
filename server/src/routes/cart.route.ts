import express from 'express'
import { addCart, fetchCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/", addCart);
router.get("/:userId/cart", fetchCart);

export default router;