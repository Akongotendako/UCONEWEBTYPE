import mongoose, { Document } from "mongoose";
import { IUser } from "./user.type.js";

export interface IProfilePic {
    url: string;
    publicId: string;
}

export interface IProfile {
  id?: string;
  userId: mongoose.Types.ObjectId | IUser
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePic: IProfilePic[];
}

export type IProfileDocument = Document<unknown, {}, IProfile> & IProfile