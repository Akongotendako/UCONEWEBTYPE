import express from 'express'
import { addOrder, fetchOrders, fetchSpecificDetails } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', addOrder);
router.get("/:userId", fetchOrders);
router.get('/:id/order', fetchSpecificDetails)

export default router;