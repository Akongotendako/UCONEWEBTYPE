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