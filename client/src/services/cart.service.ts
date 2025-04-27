import { debounce } from "lodash";
import axiosInstance from "./axiosInstance";

export const addCart = async (
  userId: string,
  productId: string,
  quantity: string,
  price: string
) => {
  const response = await axiosInstance.post("/carts", {
    userId,
    productId,
    quantity,
    price,
  });
  return response;
};

export const fetchCart = async(userId: string) => {
  const response = await axiosInstance.get(`/carts/${userId}/cart`)
  return response;
}

export const updateCart = debounce(
  async(userId: string, cartId: string, quantity: number) => {
    const response = await axiosInstance.put(`/carts/${cartId}/update`, {userId, quantity});
    return response;
  },
  500
)

export const deleteCart = async(userId: string, cartItemId: string) => {
  const response = await axiosInstance.post("/carts/remove", {
    cartItemId,
    userId
  });
  return response;
}

export const deleteAllCarts = async(userId: string) => {
  const response = await axiosInstance.delete(`/carts/${userId}`);
  return response;
}