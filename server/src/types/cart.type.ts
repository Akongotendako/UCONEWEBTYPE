import mongoose, { Document } from "mongoose";

export interface ICart {
    _id?: string,
    userId: mongoose.Types.ObjectId,
    createdAt: Date
}

export type ICartDocument = Document<unknown, {}, ICart> & ICart