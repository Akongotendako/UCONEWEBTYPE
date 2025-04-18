import { Request, Response } from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import Cart from "../models/cart.model.js";
import CartItem from "../models/cart.item.model.js";

export const addCart = async(req: Request, res: Response): Promise<void> => {

    try {
        const {userId, productId, quantity, price} = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId) && !mongoose.Types.ObjectId.isValid(productId)) {
        res.status(400).json({
            success: false,
            message: "User and product Id is invalid"
        })
        return;
    }

    if (quantity < 1) {
        res.status(400).json({
            success: false,
            message: "Quantity must be at least 1"
        })
        return;
    }

    const isProductExist = await Product.findById(productId);
    if (!isProductExist){
        res.status(400).json({
            success: false,
            message: "Product not found"
        })
        return;
    }

    const cart = new Cart({userId, createdAt: new Date() })
    await cart.save();

    let cartItem = await CartItem.findOne({cartId: cart._id, productId})
    if (cartItem) {
        cartItem.quantity += quantity
        await cartItem.save();
    } else {
        cartItem = new CartItem({
            cartId: cart._id,
            productId,
            quantity
        });
        await cartItem.save();
    }

    res.status(400).json({
        success: false,
        message: "Successfully added to the cart"
    })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error instanceof Error ? error.message : "Unknown error"
        })
    }
}