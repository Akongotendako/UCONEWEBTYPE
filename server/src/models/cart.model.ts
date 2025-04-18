import mongoose, { Schema } from "mongoose";
import { ICartDocument } from "../types/cart.type.js";


const cartSchema: Schema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdAt: {type: Date, default: Date.now}
}, {
    timestamps: true
})

const Cart = mongoose.model<ICartDocument>("Cart", cartSchema);
export default Cart

