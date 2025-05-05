import express from 'express'
import { addReview, checkUserReview, fetchSpecificProductReview } from '../controllers/review.controller.js';

const router = express.Router();

router.post("/", addReview);
router.get("/:productId", fetchSpecificProductReview);
router.get("/:userId/:id", checkUserReview)

export default router