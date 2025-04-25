import express from 'express'
import { addCart, deleteCart, fetchCart, updateCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/", addCart);
router.get("/:userId/cart", fetchCart);
router.put("/:cartId/update", updateCart);
router.post("/remove", deleteCart);

export default router;