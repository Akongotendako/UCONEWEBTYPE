import { Request, Response } from "express";
import { errorResponse } from "../types/error.response.type.js";
import mongoose, { mongo } from "mongoose";
import Review from "../models/review.model.js";
import { successResponse } from "../types/success.response.type.js";

export const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId, comment, rating } = req.body;

    const existing = await Review.findOne({ userId, productId });

    if (existing) {
      existing.comment = comment;
      existing.rating = rating;
      await existing.save();
      successResponse(res, existing, "Review added successfully");
      return;
    }

    const newReview = new Review({ userId, productId, comment, rating });
    const response = await newReview.save();

    successResponse(res, response, "Review added successfully");
  } catch (error) {
    errorResponse(res, "Internal server error", 500);
  }
};

export const fetchSpecificProductReview = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      errorResponse(res, "Invalid id", 400);
      return;
    }

    const review = await Review.find({productId}).populate("userId");
    if (!review) {
      errorResponse(res, "Product id not found", 404);
      return;
    }

    successResponse(res, review, "Reviews fetched successfully");
  } catch (error) {
    errorResponse(res, "Internal server error", 500);
  }
};
