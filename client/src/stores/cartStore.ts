import { create } from "zustand";
import { ICarts, ICartState, IItems } from "../types/cart.type";
import { interceptorError } from "../types/interceptor.error.type";
import { addCart, deleteCart, fetchCart, updateCart } from "../services/cart.service";

const cartStore = create<ICartState>((set, get) => ({
  cart: {
    userId: "",
    items: [] as IItems[],
    total: 0,
  },
  cartItem: {
    productId: "",
    cartId: "",
    quantity: 0,
    price: "",
  },
  carts: [] as ICarts[],
  increment: async (target, index) => {
    if (target === "cart") {
      set((state) => {
        const updatedItems = [...state.cart.items];
        updatedItems[index as number] = {
          ...updatedItems[index as number],
          quantity: updatedItems[index as number].quantity + 1,
        };

        return {
          ...state,
          cart: {
            ...state.cart,
            items: updatedItems,
          },
        };
      });

      await get().updateCart(index as number);
      return;
    }

    set((state) => ({
      ...state,
      cartItem: {
        ...state.cartItem,
        quantity: state.cartItem.quantity + 1,
      },
    }));
  },
  decrement: async (target, index) => {
    if (target === "cart" && get().cart.items[index as number].quantity > 0) {
      set((state) => {
        const updatedItems = [...state.cart.items];
        updatedItems[index as number] = {
          ...updatedItems[index as number],
          quantity: updatedItems[index as number].quantity - 1,
        };

        return {
          ...state,
          cart: {
            ...state.cart,
            items: updatedItems,
          },
        };
      });

      await get().updateCart(index as number);
      return;
    }

    set((state) => ({
      ...state,
      cartItem: {
        ...state.cartItem,
        quantity: state.cartItem.quantity - 1,
      },
    }));
  },
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
    set({ cart: response.data.cart });
  },
  updateCart: async (index) => {
    try {
      const { userId, items } = get().cart;
      const extractedId = items[index]._id;
      const extractedQuantity = items[index].quantity;

      console.log(`at index ${index}`)

      const response = await updateCart(
        userId,
        extractedId as string,
        extractedQuantity
      );
      console.log(`API RESPONSE`, response?.data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await get().fetchCart(userId);

      return {
        success: true,
        status: response?.status as number,
        message: response?.data.message,
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
  deleteCart: async(userId, cartItemId) => {
    try {

      const response = await deleteCart(userId, cartItemId);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await get().fetchCart(userId)
      return {
        success: true,
        status: response.status,
        message: response.data.message
      }

    } catch(error: unknown) {
      const { status, message } = error as interceptorError;
      return {
        success: false,
        status: status,
        message: message,
      };
    }
  }
}));

export default cartStore;
