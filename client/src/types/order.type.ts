import { IProduct } from "./product.type";

export interface IOrder {
    _id?: string;
    userId?: string;
    paymentMethod: "CASH" | "GCASH";
    paymentStatus: string;
    products: IProduct[];
    totalAmount: number;
    createdAt: Date
}

export interface IOrderState {
    orders: IOrder[];
    order: IOrder;
    review: string;
    fetchOrders: (userId: string) => Promise<unknown>;
    fetchSpecificDetails: (id: string) => Promise<unknown>;
}