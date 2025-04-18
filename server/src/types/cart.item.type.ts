import mongoose, { Document, Double } from "mongoose";
import { IProduct } from "./product.type.js";

export interface ICartItems {
    _id?: string,
    productId: mongoose.Types.ObjectId | IProduct,
    cartId: mongoose.Types.ObjectId,
    quantity: number,
    price: number
}

export type ICartItemsDocument = Document<unknown, {}, ICartItems> & ICartItems