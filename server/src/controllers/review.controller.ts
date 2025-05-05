import { Request, Response } from "express";
import { errorResponse } from "../types/error.response.type.js";
import mongoose, { mongo } from "mongoose";
import Review from "../models/review.model.js";
import { successResponse } from "../types/success.response.type.js";
import Product from "../models/product.model.js";

export const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId, comment, rating } = req.body;

    const existing = await Review.findOne({ userId, productId });

    if (rating < 1 || rating > 5) {
      errorResponse(res, "Rating must be between 1 and 5", 400);
      return;
    }

    if (existing) {
      existing.comment = comment;
      existing.rating = rating;
      await existing.save();
      successResponse(res, existing, "Review added successfully");
      return;
    }

    const newReview = await Review.create({ userId, productId, comment, rating });

    const product = await Product.findById(productId);
    if (!product) {
      errorResponse(res, "Product not found", 404)
      return;
    }


    const totalRating = product.averageRating * product.ratingCount;
    const newRatingCount = product.ratingCount + 1;
    const newAverage = (totalRating + rating) / newRatingCount;

    product.averageRating = newAverage;
    product.ratingCount = newRatingCount;
    await product.save();

    successResponse(res, newReview, "Review added successfully");
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


export const checkUserReview = async(req: Request, res: Response): Promise<void> => {
  try {
    const {userId, id} = req.params;

    const review = await Review.findOne({userId, productId: id});
    if (review) {
      errorResponse(res, "User reviewed this product", 404);
      return;
    }

    successResponse(res, review, "User has not reviewed yet")
  }catch(error) {
    errorResponse(res, "Internal server error", 500);
  }
}
