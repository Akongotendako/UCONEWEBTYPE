import { Request, Response } from "express";
import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import { errorResponse } from "../types/error.response.type.js";
import { successResponse } from "../types/success.response.type.js";

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
      errorResponse(res, "User not found", 400)
      return;
    }

    const response = await order.save();

    successResponse(res, response, "Thank you for your purchase! Your order has been successfully placed. You will receive a notification when your items are ready for pickup at your department.")
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
  }
};


export const fetchOrders = async(req: Request, res: Response): Promise<void> => {
  try {

    const {userId} = req.params;

    const order = await Order.find({userId});
    if (!order) {
      errorResponse(res, "Order not found", 400)
      return;
    }

   successResponse(res, order, "Order fetched successfully")

  }catch(error) {
    errorResponse(res, "Internal server error", 500, error);
  }
}

export const fetchSpecificDetails = async(req: Request, res: Response): Promise<void> => {
  try {

    const {id} = req.params;

    const order = await Order.findById(id);
    if (!order) {
      errorResponse(res, "Order not found", 400);
      return;
    }

    successResponse(res, order, "Order fetch successfully")

  }catch(error) {
    errorResponse(res, "Internal server error", 500)
  }
};

export const deleteOrder = async(req: Request, res: Response): Promise<void> => {
  try {

    const {id} = req.params;

    const order = await Order.findByIdAndDelete(id)
    if(!order) {
      errorResponse(res, "Order not found", 404);
      return;
    }

    successResponse(res, order, "Order deleted successfully");
  } catch(error) {
    errorResponse(res, "Internal server error", 500);
  }
}

export const fetchAllUsersOrders = async(req: Request, res: Response): Promise<void> => {
  try {

    const order = await Order.find({})

    if(!order) {
      errorResponse(res, "Empty orders", 404);
      return;
    }

    successResponse(res, order, "Order fetched successfully");
  } catch(error) {
    errorResponse(res, "Internal server error", 500);
  }
}