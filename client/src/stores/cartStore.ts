import { create } from "zustand";
import { ICarts, ICartState, IItems } from "../types/cart.type";
import { interceptorError } from "../types/interceptor.error.type";
import { addCart, fetchCart } from "../services/cart.service";

const cartStore = create<ICartState>((set, get) => ({
  cart: {
    userId: "",
    items: [] as IItems[]
  },
  cartItem: {
    productId: "",
    cartId: "",
    quantity: 0,
    price: "",
  },
  carts: [] as ICarts[],
  increment: () =>
    set((state) => ({
      ...state,
      cartItem: {
        ...state.cartItem,
        quantity: state.cartItem.quantity + 1,
      },
    })),
  decrement: () =>
    set((state) => {
      if (state.cartItem.quantity === 0) {
        return {
          ...state,
          cartItem: {
            ...state.cartItem,
            quantity: state.cartItem.quantity,
          },
        };
      }
      return {
        ...state,
        cartItem: {
          ...state.cartItem,
          quantity: state.cartItem.quantity - 1,
        },
      };
    }),
  addCart: async () => {
    try {
      const { userId } = get().cart;
      const { productId, quantity, price } = get().cartItem;

      const response = await addCart(
        userId,
        productId,
        String(quantity),
        price
      );
      return {
        success: true,
        status: response.status,
        message: response.data.message,
      };
    } catch (error: unknown) {
      const { status, message } = error as interceptorError;
      return {
        success: false,
        status: status,
        message: message,
      };
    }
  },
  fetchCart: async (userId) => {
    const response = await fetchCart(userId);
    set({cart: response.data.cart})
  },
}));

export default cartStore;
