import express from 'express'
import { addCart, deleteAllCarts, deleteCart, fetchCart, updateCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/", addCart);
router.get("/:userId/cart", fetchCart);
router.put("/:cartId/update", updateCart);
router.post("/remove", deleteCart);
router.delete("/:userId", deleteAllCarts);

export default router;