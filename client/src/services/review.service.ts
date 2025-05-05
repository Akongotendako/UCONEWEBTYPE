import axiosInstance from "./axiosInstance";

export const addReview = async (
  userId: string,
  productId: string,
  rating: number,
  comment: string
) => {
  const response = await axiosInstance.post("/reviews", {
    userId,
    productId,
    rating,
    comment,
  });
  return response;
};

export const fetchSpecificProductReview = async (productId: string) => {
  const response = await axiosInstance.get(`/reviews/${productId}`);
  return response;
};

export const checkUserReview = async (userId: string, id: string) => {
  const response = await axiosInstance.get(`/reviews/${userId}/${id}`);
  return response;
};
