import axiosInstance from "./axiosInstance"

export const fetchProfile = async(userId: string) => {
    const response = await axiosInstance.get(`/profile/${userId}`);
    return response;
}