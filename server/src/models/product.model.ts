import mongoose, { Schema } from "mongoose";
import { IProductDocument } from "../types/product.type";


const productSchema: Schema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    images: [
        {
            url: {type: String, required: true},
            publicId: {type: String, required: true}
        }
    ],
    sizes: [{ type: String }],
    category: String
}, {
    timestamps: true
});

const Product = mongoose.model<IProductDocument>("Product", productSchema)

export default Product;