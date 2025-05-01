import { Request, Response } from "express";
import { errorResponse } from "../types/error.response.type.js";
import mongoose from "mongoose";
import Review from "../models/review.model.js";
import { successResponse } from "../types/success.response.type.js";

export const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId, comment, rating } = req.body;

    if (
      !mongoose.Types.ObjectId.isValid(userId) &&
      !mongoose.Types.ObjectId.isValid(productId)
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid ids",
      });
      return;
    }

    const review = await Review.find({ userId });

    if (!userId) {
      errorResponse(res, "User not found", 400);
      return;
    }

    const isReviewOnTheProductExist = await Review.findOne({ productId });
    if (isReviewOnTheProductExist) {
      isReviewOnTheProductExist.comment = comment;
      await isReviewOnTheProductExist.save();
      successResponse(
        res,
        isReviewOnTheProductExist,
        "Review added successfully"
      );
      return;
    }

    const newReview = new Review({ userId, productId, comment, rating });
    const response = newReview.save();

    successResponse(res, response, "Review added successfully");
  } catch (error) {
    errorResponse(res, "Internal server error", 500);
  }
};
