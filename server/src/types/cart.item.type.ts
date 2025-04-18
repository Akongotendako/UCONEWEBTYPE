import mongoose, { Document, Double } from "mongoose";

export interface ICartItems {
    _id?: string,
    productId: mongoose.Types.ObjectId,
    cartId: mongoose.Types.ObjectId,
    quantity: number,
    price: number
}

export type ICartItemsDocument = Document<unknown, {}, ICartItems> & ICartItems