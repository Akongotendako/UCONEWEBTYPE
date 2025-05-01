import mongoose, { Schema } from "mongoose";
import { ref } from "process";
import { IReviewDocument } from "../types/review.type.js";

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
        required: true
    },
    rating: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

const Review = mongoose.model<IReviewDocument>("Review", reviewSchema);
export default Review;