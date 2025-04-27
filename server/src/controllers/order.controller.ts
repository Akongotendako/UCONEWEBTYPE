import { Request, Response } from "express";
import Order from "../models/order.model.js";
import User from "../models/user.model.js";

export const addOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      userId,
      products,
      paymentMethod,
      paymentStatus,
      orderStatus,
      totalAmount,
    } = req.body;

    const parseProducts = JSON.parse(products)

    const order = new Order({
      products: parseProducts,
      userId,
      paymentMethod,
      paymentStatus,
      orderStatus,
      totalAmount,
    });

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    const response = await order.save();

    res.status(200).json({
      success: true,
      message:
        "Thank you for your purchase! Your order has been successfully placed. You will receive a notification when your items are ready for pickup at your department.",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};


export const fetchOrders = async(req: Request, res: Response): Promise<void> => {
  try {

    const {userId} = req.params;

    const order = await Order.find({userId});
    if (!order) {
      res.status(400).json({
        success: false,
        message: "Order not found"
      });
      return;
    }

    res.status(200).json({
      success: false,
      message: "Order fetched successfully",
      data: order
    });

  }catch(error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}