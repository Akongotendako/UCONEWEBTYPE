import { IUser } from "./user.type";

export interface IReview {
  _id?: string;
  userId: IUser;
  productId: string;
  comment: string;
  rating: number;
  createdAt: Date
}

export interface IReviewState {
  review: IReview;
  reviews: IReview[];
  isReview: boolean;
  setField: <K extends keyof IReview>(
    field: K,
    value: IReview[K]
  ) => void;
  addReview: (
    userId: string,
  ) => Promise<{ success: boolean; status: number; message: string }>;
  fetchSpecificProductReview: (productId: string) => Promise<unknown>;
  checkUserReview: (userId: string, id: string) => Promise<unknown>;
}
