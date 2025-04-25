import mongoose, { Schema } from "mongoose";
import { ref } from "process";
import { IProfileDocument } from "../types/profile.type.js";

const profileSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    profilePic: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model<IProfileDocument>("Profile", profileSchema);
export default Profile;
