import express from 'express'
import { addOrder, fetchOrders } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', addOrder);
router.get("/:userId", fetchOrders);

export default router;