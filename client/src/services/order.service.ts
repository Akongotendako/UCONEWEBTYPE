import axiosInstance from "./axiosInstance"

export const addOrder = async(data: FormData) => {
    const response = await axiosInstance.post("/orders", data);
    return response
}

export const fetchOrders = async(userId: string) => {
    const response = await axiosInstance.get(`/orders/${userId}`);
    return response
}

export const fetchSpecificDetails = async(id: string) => {
    const response = await axiosInstance.get(`/orders/${id}/order`);
    return response
}

export const deleteOrder = async(id: string) => {
    const response = await axiosInstance.delete(`/orders/${id}`);
    return response
}

export const fetchAllUsersOrders = async() => {
    const response = await axiosInstance.get(`/orders`);
    return response
}