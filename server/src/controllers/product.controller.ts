import { Request, Response } from "express";
import Product from "../models/product.model.js";
import {
  addImages,
  areAllFieldsEmpty,
  arePriceAndStockNumbers,
  isImageFileEmpty,
} from "../utils/validateProduct.util.js";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";
import { ICloudinary } from "../types/cloudinary.type.js";
import { IOriginalImages } from "../types/originalImages.type.js";

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
    if (!areAllFieldsEmpty(data)) {
      res.status(400).json({
        message: "All fields must not be empty",
        success: false,
      });
      return;
    }

    // check if price and stock are in number format
    if (!arePriceAndStockNumbers(price, stock)) {
      res.status(400).json({
        message: "Price and stock fields must be in numbers",
        success: false,
      });
      return;
    }

    // check if the images handled by multer is empty
    if (isImageFileEmpty(req.files)) {
      res.status(400).json({
        message: "No images uploaded",
        success: false,
        error: "No files were found in the request",
      });
      return;
    }

    // waiting for the images being uploaded in the cloudiary platform
    if (req.files) {
      let files: Express.Multer.File[] = [];

      if (Array.isArray(req.files)) {
        files = req.files;
      } else {
        files = Object.values(req.files).flat();
      }
      const uploadPromises = files.map((file) => {
        return new Promise<ICloudinary>((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "UCONEWEB", resource_type: "auto" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result as ICloudinary);
            }
          );

          const readableStream = new Readable();
          readableStream.push(file.buffer);
          readableStream.push(null);
          readableStream.pipe(stream);
        });
      });

      // result from the images beign uploaded
      const results = await Promise.all(uploadPromises);

      newProduct.images = results.map((result) => ({
        url: result.secure_url,
        publicId: result.public_id,
      }));
    }

    const response = await newProduct.save();

    res.status(200).json({
      message: "Product addded Successfully",
      success: true,
      response: response,
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

// get specific product
export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const response = await Product.findById(id);

    // checking if the item exist in the database before fetch it
    if (!response) {
      res.status(404).json({
        message: "Product not found",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: "Product successfully fetched",
      success: true,
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Uknown Error",
    });
  }
};

// update product
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
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

    const existingImages = req.body.existingImages
      ? JSON.parse(req.body.existingImages)
      : [];

    const originalImages = req.body.originalImages
      ? JSON.parse(req.body.originalImages)
      : [];

    // checking if all fields are not empty
    if (areAllFieldsEmpty(data)) {
      res.status(400).json({
        message: "All fields must not be empty",
        success: false,
        error: null,
        response: null,
      });
      return;
    }

    // delete an asset from the cloudinary if the user changes the image
    deleteAnAsset(originalImages, existingImages);

    // checking if the price and stock are in numbers format
    if (arePriceAndStockNumbers(price, stock)) {
      res.status(400).json({
        message: "Price and stock fields must be in numbers",
        success: false,
        error: null,
        response: null,
      });
      return;
    }

    const product = await Product.findById(id);

    // check if the product is truly exist in the database before update it
    if (!product) {
      res.status(404).json({
        message: "Product not found",
        success: false,
      });
      return;
    }

    // update assets from cloudinary and wait it after the successful operation
    let newImages: IOriginalImages[] = [];
    let files: Express.Multer.File[] = [];

    if (files && files.length > 0) {
      const uploadPromises = files.map((file) => {
        return new Promise<ICloudinary>((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "UCONEWEB", resource_type: "auto" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result as ICloudinary);
            }
          );

          const readableStream = new Readable();
          readableStream.push(file.buffer);
          readableStream.push(null);
          readableStream.pipe(stream);
        });
      });

      const results = await Promise.all(uploadPromises);
      newImages = results.map((result) => ({
        url: result.secure_url,
        publicId: result.public_id,
      }));
    }

    const updatedImages = [...existingImages, ...newImages];

    product.productName = productName;
    product.description = description;
    product.price = price;
    product.stock = stock;
    (product.discount = discount), (product.images = updatedImages);
    product.sizes = sizes;
    product.category = category;

    const response = await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      response: null,
    });
  }
};
function deleteAnAsset(originalImages: any, existingImages: any) {
  throw new Error("Function not implemented.");
}

// delete a specific product
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      res.status(404).json({
        message: "Product not found",
        success: false,
        error: null,
        response: null,
      });
      return;
    }

    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      error: null,
      response: null,
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

// get specific product by category
export const getProductByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { category } = req.params;

    if (!category) {
      res.status(400).json({
        message: `Request is empty`,
        success: false,
        error: null,
        response: null,
      });
      return;
    }

    const productByCategory = await Product.find({ category: category });

    if (!productByCategory) {
      res.status(404).json({
        message: `Product with category of ${category} is empty`,
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: `Product of category ${category} is fetched successfully`,
      success: true,
      response: productByCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
    });
  }
};
