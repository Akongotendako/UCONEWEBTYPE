import mongoose, { Document } from "mongoose";
import { IUser } from "./user.type.js";
import { IProduct } from "./product.type.js";

export interface IReview {
    _id?: string,
    userId: mongoose.Types.ObjectId | IUser,
    productId: mongoose.Types.ObjectId | IProduct,
    comment: string,
    rating: number
}

export type IReviewDocument = Document<unknown, {}, IReview> & IReview