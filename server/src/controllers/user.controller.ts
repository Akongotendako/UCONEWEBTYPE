import { Request, Response } from "express";
import User from "../models/user.model";
import { areAllFieldsEmpty, isPasswordMatch } from "../utils/validateUser.util";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, confirmPassword } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (areAllFieldsEmpty({ email, password, confirmPassword })) {
      res
        .status(400)
        .json({ success: false, message: "All fields must not be empty" });
      return;
    }

    if (isUserExist) {
      res.status(404).json({ success: false, message: "User already exist" });
      return;
    }

    if (isPasswordMatch({ password, confirmPassword })) {
      res.status(400).json({ success: false, message: "Password don't match" });
      return;
    }

    const user = await User.create({
      email,
      password,
      confirmPassword,
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
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
