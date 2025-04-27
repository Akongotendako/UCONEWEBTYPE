import mongoose, { Document } from "mongoose";
import { IProduct } from "./product.type.js";


export interface IOrderProduct {
    productId: mongoose.Types.ObjectId;
    name: string;
    sizes: string[],
    images: [{
        url?: string,
        publicId?: string
    }],
    quantity: number;
    price: number;
}

export interface IOrder {
    _id?: string,
    userId: mongoose.Types.ObjectId,
    paymentMethod: "CASH" | "GCASH",
    paymentStatus: "Pending" | "Paid",
    orderStatus: "Ready for Pickup" | "Completed" | "Cancelled",
    products: IOrderProduct,
    totalAmount: string
}

export type IOrderDocument = Document<unknown, {}, IOrder> & IOrder