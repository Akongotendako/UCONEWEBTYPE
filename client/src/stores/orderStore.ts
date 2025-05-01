import { create } from "zustand";
import { IOrder, IOrderState } from "../types/order.type";
import { fetchOrders, fetchSpecificDetails } from "../services/order.service";

const orderStore = create<IOrderState>((set) => ({
  orders: [] as IOrder[],
  order: {
    paymentMethod: "CASH",
    paymentStatus: "",
    products: [],
    totalAmount: 0,
    createdAt: new Date()
  } as  IOrder,
  review: "",
  fetchOrders: async (userId) => {
    const response = await fetchOrders(userId)
    set({orders: response.data.data})
  },
  fetchSpecificDetails: async(id) => {
    const response = await fetchSpecificDetails(id);
    set({order: response.data.data})
  },
}));

export default orderStore;



















