import { Request, Response } from "express";
import Product from "../models/product.model.js";
import {
  areAllFieldsEmpty,
  arePriceAndStockNumbers,
  isImageFileEmpty,
} from "../utils/validateProduct.util.js";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";
import { ICloudinary } from "../types/cloudinary.type.js";
import { IOriginalImages } from "../types/originalImages.type.js";
import { deleteAnAsset } from "../utils/delete.asset.util.js";
import { successResponse } from "../types/success.response.type.js";
import { errorResponse } from "../types/error.response.type.js";

// Get all products
export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.find();

    successResponse(res, product, "Product successfully fetched");
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
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
      errorResponse(res, "All fields must not be empty", 400);
      return
    }

    // check if price and stock are in number format
    if (!arePriceAndStockNumbers(price, stock)) {
      errorResponse(res, "Price and stock fields must be in numbers", 400);
      return
    }

    // check if the images handled by multer is empty
    if (isImageFileEmpty(req.files)) {
      errorResponse(
        res,
        "No images uploaded",
        400,
        "No files were found in the request"
      );
      return
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

      // result from the images being uploaded
      const results = await Promise.all(uploadPromises);

      newProduct.images = results.map((result) => ({
        url: result.secure_url,
        publicId: result.public_id,
      }));
    }

    const response = await newProduct.save();

    successResponse(res, response, "Product added Successfully");
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
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
      errorResponse(res, "Product not found", 400);
      return;
    }

    successResponse(res, response, "Product successfully fetched");
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
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
    if (!areAllFieldsEmpty(data)) {
      errorResponse(res, "All fields must not be empty", 400);
      return;
    }

    // delete an asset from the cloudinary if the user changes the image
    deleteAnAsset(originalImages, existingImages);

    // checking if the price and stock are in numbers format
    if (!arePriceAndStockNumbers(price, stock)) {
      errorResponse(res, "Price and stock fields must be in numbers", 400);
      return;
    }

    const product = await Product.findById(id);

    // check if the product is truly exist in the database before update it
    if (!product) {
      errorResponse(res, "Product not found", 400);
      return;
    }

    // update assets from cloudinary and wait it after the successful operation
    let newImages: IOriginalImages[] = [];
    let files: Express.Multer.File[] = [];

    if (req.files) {
      if (Array.isArray(req.files)) {
        files = req.files;
      } else {
        files = Object.values(req.files).flat();
      }
    }

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

    successResponse(res, response, "Product updated successfully");
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
  }
};

// delete a specific product
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      errorResponse(res, "Product not found", 404);
      return;
    }

    successResponse(res, deletedProduct, "Product deleted successfully");
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
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
      errorResponse(res, "Request is empty", 404);
      return;
    }

    const productByCategory = await Product.find({ category: category });

    if (!productByCategory) {
      errorResponse(res, `Product with category of ${category} is empty`, 404)
      return;
    }

    successResponse(res, productByCategory, `Product of category ${category} is fetched successfully`)
  } catch (error) {
    errorResponse(res, "Internal server error", 500, error);
  }
};
