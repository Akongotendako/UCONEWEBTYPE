import { Request, Response } from "express";
import Product from "../models/product.model";
import {
  areAllFieldsEmpty,
  arePriceAndStockNumbers,
  isImageFileEmpty,
} from "../utils/validateProduct.util";

// Get all products
export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.find();

    res.status(200).json({
      message: "Product successfully fetched",
      success: true,
      error: null,
      response: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
      response: null,
    });
  }
};

// Add product
export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      productName,
      description,
      price,
      stock,
      discount,
      sizes,
      category,
    } = req.body;

    const data = {
      productName: productName,
      description: description,
      price: price,
      stock: stock,
      discount: discount,
      sizes: sizes,
      category: category,
    };

    const newProduct = new Product({
      productName,
      description,
      price,
      stock,
      discount,
      sizes,
      category,
      images: [],
    });

    // check if all fields are empty
    if (areAllFieldsEmpty(data)) {
      res.status(400).json({
        message: "All fields must not be empty",
        success: false,
      });
      return;
    }

    // check if price and stock are in number format
    if (arePriceAndStockNumbers(price, stock)) {
      res.status(400).json({
        message: "Price and stock fields must be in numbers",
        success: false,
      });
      return;
    }

    // check if the images handled by multer is empty
    isImageFileEmpty(req.files);

    // waiting for the images being uploaded in the cloudiary platform
    const uploadPromises = addImages(req.files);

    // result from the images beign uploaded
    const results = await Promise.all(uploadPromises);

    newProduct.images = results.map((result) => ({
      url: result.secure_url,
      publicId: result.public_id,
    }));

    const response = await newProduct.save();

    return res.status(200).json({
      message: "Product addded Successfully",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};
