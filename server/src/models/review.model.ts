import mongoose, { Schema } from "mongoose";
import { ref } from "process";
import { IReviewDocument } from "../types/review.type.js";
import { maxHeaderSize } from "http";

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        max: 5,
        min: 1,
        required: true
    }
}, {
    timestamps: true
});

const Review = mongoose.model<IReviewDocument>("Review", reviewSchema);
export default Review;