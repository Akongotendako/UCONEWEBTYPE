export interface IReview {
  _id?: string;
  userId: string;
  productId: string;
  comment: string;
  rating: number;
}

export interface IReviewState {
  review: IReview;
  reviews: IReview[];
  setField: <K extends keyof IReview>(
    field: K,
    value: IReview[K]
  ) => void;
  addReview: (
    userId: string,
  ) => Promise<{ success: boolean; status: number; message: string }>;
  fetchSpecificProductReview: (productId: string) => Promise<unknown>;
}
