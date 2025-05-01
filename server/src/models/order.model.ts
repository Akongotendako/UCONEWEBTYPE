import mongoose, { Schema } from "mongoose";
import { IOrderDocument } from "../types/order.type.js";

const orderProductSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    images: [
      {
        url: String,
        publicId: String,
      },
    ],
    sizes: [{ type: String, required: false }],
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true
    },
    total: {
      type: String, 
      required: true
    }
  },
  {
    _id: false,
  }
);

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: {
      type: String,
      enum: ["CASH", "GCASH"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["Ready for Pickup", "Completed", "Cancelled"],
      required: true,
    },
    products: {
      type: [orderProductSchema],
    },
    totalAmount: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<IOrderDocument>("Order", orderSchema);
export default Order;
