import { Document } from "mongoose";

export interface IUser {
    email: string;
    password: string;
    confirmPassword: string;
    role: string
}

export type IUserDocument = Document<unknown, {}, IUser> & IUser;