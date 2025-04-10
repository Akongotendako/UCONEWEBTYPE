import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../types/user.type.js";
import { IProfile } from "../types/profile.type.js";

const profileSchema: Schema = new Schema<IProfile>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    profilePic: {
        url: { type: String, required: true },
        publicId: { type: String, required: true }
    }
})

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
    profileSchema: profileSchema
}, {
    timestamps: true
})

const User = mongoose.model<IUserDocument>("User", userSchema);

export default User;