import axiosInstance from "./axiosInstance"

export const addOrder = async(data: FormData) => {
    const response = await axiosInstance.post("/orders", data);
    return response
}

export const fetchOrders = async(userId: string) => {
    const response = await axiosInstance.get(`/orders/${userId}`);
    return response
}