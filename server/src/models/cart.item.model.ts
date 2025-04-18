import mongoose, { Schema } from "mongoose";
import { ICartItemsDocument } from "../types/cart.item.type.js";

const cartItemSchema: Schema = new Schema({
    productId: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    cartId: {type: Schema.Types.ObjectId, ref: 'Cart', required: true},
    quantity: {type: Number, required: false},
    price: {type: Number, required: false}
}, {
    timestamps: true
})

const CartItem = mongoose.model<ICartItemsDocument>("CartItem", cartItemSchema);
export default CartItem