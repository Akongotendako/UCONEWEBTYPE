import express from 'express'
import { addOrder, deleteOrder, fetchOrders, fetchSpecificDetails } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', addOrder);
router.get("/:userId", fetchOrders);
router.get('/:id/order', fetchSpecificDetails);
router.delete("/:id", deleteOrder);
export default router;