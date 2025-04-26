import mongoose, { Document } from "mongoose";
import { IUser } from "./user.type.js";

export interface IProfilePic {
    url?: string;
    publicId?: string;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: string;
  profilePic: IProfilePic;
}