import { IProfile } from "../types/user.type";
import axiosInstance from "./axiosInstance";

export const signUp = async ({
  email,
  password,
  confirmPassword,
  role,
  profile,
}: {
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  profile: IProfile;
}) => {
  const response = await axiosInstance.post("/users", {
    email,
    password,
    confirmPassword,
    role,
    profile,
  });
  return response;
};

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/users/sign-in", {
    email,
    password,
  });
  return response;
};

export const fetchProfile = async (userId: string) => {
  const response = await axiosInstance.get(`/users/${userId}`);
  return response;
};

export const updateProfile = async (userId: string, data: FormData) => {
  const response = await axiosInstance.post(`/users/${userId}/update-profile`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
