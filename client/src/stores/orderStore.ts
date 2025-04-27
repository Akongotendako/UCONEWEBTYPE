import { create } from "zustand";
import { IOrder, IOrderState } from "../types/order.type";
import { fetchOrders } from "../services/order.service";

const orderStore = create<IOrderState>((set, get) => ({
  order: [] as IOrder[],
  fetchOrders: async (userId) => {
    const response = await fetchOrders(userId)
    set({order: response.data.data})
  },
}));

export default orderStore;
