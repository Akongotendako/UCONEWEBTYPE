import { Document } from "mongoose";
import { IProfile } from "./profile.type.js";

export interface IUser {
    email: string;
    password: string;
    confirmPassword: string;
    role: string,
    profile: IProfile
}

export type IUserDocument = Document<unknown, {}, IUser> & IUser;