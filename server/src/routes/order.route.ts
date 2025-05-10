import express from 'express'
import { addOrder, deleteOrder, fetchAllUsersOrders, fetchOrders, fetchSpecificDetails } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', addOrder);
router.get("/:userId", fetchOrders);
router.get('/:id/order', fetchSpecificDetails);
router.delete("/:id", deleteOrder);
router.get("/", fetchAllUsersOrders);
export default router;