import { IProduct } from "./product.type";

export interface IItems {
  _id?: string;
  product: IProduct;
  quantity: number;
  itemTotal: number;
  originalPrice: number;
  discountPerItem: number;
}
export interface ICart {
  userId: string;
  items: IItems[];
  total: number;
}

export interface ICartItem {
  productId: string;
  cartId: string;
  quantity: number;
  price: string;
}

export interface ICarts {
  _id: string;
  productId: IProduct;
  cartId: ICart;
  quantity: number;
}

export interface ICartState {
  cart: ICart;
  cartItem: ICartItem;
  carts: ICarts[];
  addCart: () => Promise<{ success: boolean; status: number; message: string }>;
  fetchCart: (userId: string) => Promise<unknown>;
  increment: (target: "cartItem" | "cart", index?: number) => Promise<void>;
  decrement: (target: "cartItem" | "cart", index?: number) => Promise<void>;
  updateCart: (
    index: number
  ) => Promise<{ success: boolean; status: number; message: string }>;
  deleteCart: (
    userId: string,
    cartItemId: string
  ) => Promise<{ success: boolean; status: number; message: string }>;
  addOrder: (
    paymentMethod: "CASH" | "GCASH",
    paymentStatus: "Pending" | "Paid"
  ) => Promise<{ success: boolean; status: number; message: string }>;
  deleAllCarts: (userId: string) => Promise<unknown>;
}
