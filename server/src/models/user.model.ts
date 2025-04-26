import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../types/user.type.js";
import { IProfile } from "../types/profile.type.js";
import { url } from "inspector";
import { profile } from "console";

const profileSchema = new Schema<IProfile>({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },
  profilePic: {
    url: { type: String, required: false },
    publicId: { type: String, required: false },
  },
});

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    profile: {type: profileSchema, required: false}
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUserDocument>("User", userSchema);

export default User;
