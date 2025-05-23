import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import Cart from "../models/cart.model.js";
import CartItem from "../models/cart.item.model.js";
import { IProduct } from "../types/product.type.js";
import { parseDiscount } from "../utils/parse.discount.util.js";

export const addCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId, quantity, price } = req.body;

    if (
      !mongoose.Types.ObjectId.isValid(userId) &&
      !mongoose.Types.ObjectId.isValid(productId)
    ) {
      res.status(400).json({
        success: false,
        message: "User and product Id is invalid",
      });
      return;
    }

    if (quantity < 1) {
      res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
      return;
    }

    const isProductExist = await Product.findById(productId);
    if (!isProductExist) {
      res.status(400).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, createdAt: new Date() });
      await cart.save();
    }

    console.log(`cart id ${cart._id}`);

    let cartItem = await CartItem.findOne({ cartId: cart._id, productId });
    if (cartItem) {
      cartItem.quantity += Number(quantity);
      await cartItem.save();
    } else {
      cartItem = new CartItem({
        cartId: cart._id,
        productId,
        quantity,
      });
      await cartItem.save();
    }

    res.status(200).json({
      success: true,
      message: "Successfully added to the cart",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const fetchCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    console.log(`user id ni bai ${userId}`);

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({
        success: false,
        message: "Invalid User Id ni bai",
      });
      return;
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(400).json({
        success: false,
        message: "Cart not found",
      });
      return;
    }

    const cartItems = await CartItem.find({ cartId: cart._id })
      .populate<{ productId: IProduct }>("productId")
      .populate("cartId");

    let total = 0;
    const items = cartItems.map((cartItem) => {
      const price = cartItem.productId.price;
      const quantity = cartItem.quantity;
      const discount = parseDiscount(cartItem.productId.discount);
      const originalPrice = price * quantity;
      const discountedPrice = price * (1 - discount);
      const discountPerItem = price * discount;
      const itemTotal = discountedPrice * quantity;
      total += itemTotal;
      return {
        _id: cartItem._id,
        product: cartItem.productId,
        quantity: cartItem.quantity,
        originalPrice: originalPrice,
        discountPerItem: Number(discountPerItem).toFixed(2),
        itemTotal: itemTotal.toFixed(2),
      };
    });

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cart: {
        userId: userId,
        items,
        total: total.toFixed(2),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// update cart
export const updateCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cartId } = req.params;
    const { userId, quantity } = req.body;

    if (
      !mongoose.Types.ObjectId.isValid(userId) &&
      !mongoose.Types.ObjectId.isValid(cartId)
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid ids",
      });
      return;
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({
        success: false,
        message: "Cart not found",
      });
      return;
    }

    await CartItem.findByIdAndUpdate(cartId, { $set: { quantity: quantity } });

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cartItemId, userId } = req.body;

    if (
      !mongoose.Types.ObjectId.isValid(userId) &&
      !mongoose.Types.ObjectId.isValid(cartItemId)
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid ids",
      });
      return;
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({
        success: false,
        message: "Cart not found",
      });
      return;
    }

    const cartItem = await CartItem.findByIdAndDelete(cartItemId);
    if (!cartItem) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteAllCarts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({
        success: false,
        message: "Invalid ids",
      });
      return;
    }

    const cart = await Cart.findOneAndDelete({ userId });
    if (!cart) {
      res.status(400).json({
        success: false,
        message: "Cart not found",
      });
      return;
    }

    const response = await CartItem.deleteMany({ cartId: cart._id });

    res.status(200).json({
      success: true,
      message: "Cart deleted successfully",
      data: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
