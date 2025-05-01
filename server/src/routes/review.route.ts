import express from 'express'
import { addReview, fetchSpecificProductReview } from '../controllers/review.controller.js';

const router = express.Router();

router.post("/", addReview);
router.get("/:productId", fetchSpecificProductReview)

export default router