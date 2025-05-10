import { create } from "zustand";
import { IOrder, IOrderState } from "../types/order.type";
import {
  deleteOrder,
  fetchAllUsersOrders,
  fetchOrders,
  fetchSpecificDetails,
} from "../services/order.service";
import { interceptorError } from "../types/interceptor.error.type";

const orderStore = create<IOrderState>((set) => ({
  orders: [] as IOrder[],
  order: {
    paymentMethod: "CASH",
    paymentStatus: "",
    products: [],
    totalAmount: 0,
    createdAt: new Date(),
  } as IOrder,
  review: "",
  fetchOrders: async (userId) => {
    const response = await fetchOrders(userId);
    set({ orders: response.data.data });
  },
  fetchSpecificDetails: async (id) => {
    const response = await fetchSpecificDetails(id);
    set({ order: response.data.data });
  },
  deleteOrder: async (id) => {
    try {
      const response = await deleteOrder(id);

      return {
        success: true,
        status: response.status,
        message: response.data.message,
      };
    } catch (error: unknown) {
      const { status, message } = error as interceptorError;
      return {
        status: status,
        success: false,
        message: message,
      };
    }
  },
  fetchAllUsersOrders: async() => {
    const response = await fetchAllUsersOrders()
    set({orders: response.data.data})
  },
}));

export default orderStore;
