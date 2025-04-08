import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../types/user.type";
import { profile } from "console";

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    profileSchema: profile
}, {
    timestamps: true
})

const User = mongoose.model<IUserDocument>("User", userSchema);

export default User;