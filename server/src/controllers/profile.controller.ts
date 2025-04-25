import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import Profile from "../models/profile.model.js";

export const fetchProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({
        success: false,
        message: "Id is not valid",
      });
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    const profile = await Profile.findOne({ userId }).populate('User');
    if (!profile) {
      res.status(400).json({
        success: false,
        message: "Profile not found",
      });
      return;
    }

    res.status(400).json({
      success: false,
      message: "User not found",
      profile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
