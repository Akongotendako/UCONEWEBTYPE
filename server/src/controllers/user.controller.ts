import { Request, Response } from "express";
import User from "../models/user.model.js";
import {
  areAllFieldsEmpty,
  isPasswordMatch,
} from "../utils/validateUser.util.js";
import cloudinary from "../config/cloudinary.js";
import { ICloudinary } from "../types/cloudinary.type.js";
import { Readable } from "stream";
import { IImage } from "../types/product.type.js";
import { IProfilePic } from "../types/profile.type.js";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, confirmPassword, role, profile } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (!email.includes("@gmail.com")) {
      res.status(400).json({
        success: false,
        message: "Missing '@gmail.com' in your email'",
      });
      return;
    }

    if (!areAllFieldsEmpty({ email, password, confirmPassword })) {
      res
        .status(400)
        .json({ success: false, message: "All fields must not be empty" });
      return;
    }

    if (isUserExist) {
      res.status(404).json({ success: false, message: "User already exist" });
      return;
    }

    if (!isPasswordMatch({ password, confirmPassword })) {
      res.status(400).json({ success: false, message: "Password don't match" });
      return;
    }

    const user = await User.create({
      email,
      password,
      confirmPassword,
      role,
      profile,
    });

    const response = await user.save();

    res.status(200).json({
      success: true,
      message: "Sign up successfully",
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// sign in
export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (!email.includes("@gmail.com")) {
      res.status(400).json({
        message: "Missing '@gmail.com' in your email",
        success: false,
      });
      return;
    }

    if (!email || !password) {
      res.status(400).json({
        message: "All fields must not be empty",
        success: false,
      });
      return;
    }
    if (!isUserExist) {
      res.status(404).json({
        message: "User not found",
        success: false,
      });
      return;
    }

    if (isUserExist.password !== password) {
      res.status(404).json({
        message: "password doesn't match",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: "You have successfully sign in",
      success: true,
      response: isUserExist,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
    });
  }
};

export const fetchProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: "Profile fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
    });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    const { email, password, firstName, lastName, phoneNumber, age } = req.body;

    const originalImage = req.body.originalImage
      ? JSON.parse(req.body.originalImage)
      : {};

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
      });
      return;
    }

    if (originalImage) {
      cloudinary.uploader.destroy(
        originalImage.publicId,
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            console.error("Error deleting asset:", error);
          } else if (result.result === "ok") {
            console.log("Asset successfully deleted:", result);
          } else {
            console.log("Deletion response:", result);
          }
        }
      );
    }

    let newImage: IProfilePic = {};
    if (req.file) {
      const result = await new Promise<ICloudinary>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "UCONEWEB", resource_type: "auto" },
          (error, result) => {
            if (error) {
              reject(result);
            } else {
              resolve(result as ICloudinary);
            }
          }
        );

        const readableStream = new Readable();
        readableStream.push(req.file?.buffer);
        readableStream.push(null);
        readableStream.pipe(stream);
      });

      newImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    }

    user.email = email;
    user.password = password;
    user.profile.firstName = firstName;
    user.profile.lastName = lastName;
    user.profile.phoneNumber = phoneNumber;
    user.profile.age = age;
    user.profile.profilePic = newImage;

    const response = await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
    });
  }
};
