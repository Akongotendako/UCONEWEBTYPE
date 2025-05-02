import { create } from "zustand";
import { IReview, IReviewState } from "../types/review.type";
import { addReview, fetchSpecificProductReview } from "../services/review.service";
import { interceptorError } from "../types/interceptor.error.type";
import { IProfilePic, IUser } from "../types/user.type";

const reviewStore = create<IReviewState>((set, get) => ({
  reviews: [] as IReview[],
  review: {
    userId: {
      _id: "",
      email: "",
      profile: {
        firstName: "",
        lastName: "",
        age: "",
        profilePic: {
          url: ""
        } as IProfilePic,
        phoneNumber: ""
      }
    } as IUser,
    productId: "",
    comment: "",
    rating: 0,
    createdAt: new Date()
  },
  setField: <K extends keyof IReview>(field: K, value: IReview[K]) =>
    set((state) => ({
        ...state,
        review: {
            ...state.review,
            [field]: value
        }
    })),
  addReview: async (userId) => {
    try {
      const { rating, comment, productId } = get().review;
      const response = await addReview(userId, productId, rating, comment);
      console.log("hello")
      return {
        success: true,
        status: response.status,
        message: response.data.message,
      };
    } catch (error: unknown) {
      const { status, message } = error as interceptorError;
      return {
        success: true,
        status: status,
        message: message,
      };
    }
  },
  fetchSpecificProductReview: async(productId) => {
    const response = await fetchSpecificProductReview(productId);
    set({reviews: response.data.data})
  },
}));

export default reviewStore;
