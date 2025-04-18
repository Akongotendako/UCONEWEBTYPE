import express from 'express'
import { addCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post("/", addCart);

export default router;