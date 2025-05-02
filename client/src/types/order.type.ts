import { IImage } from "./product.type";

export interface IOrderProduct {
    productId: string;
    productName: string;
    description: string;
    price: string;
    discount: string;
    images: IImage[];
    sizes: string[];
    category: string;
    quantity: string;
    total: string;
}

export interface IOrder {
    _id?: string;
    userId?: string;
    paymentMethod: "CASH" | "GCASH";
    paymentStatus: string;
    products: IOrderProduct[];
    totalAmount: number;
    createdAt: Date
}

export interface IOrderState {
    orders: IOrder[];
    order: IOrder;
    review: string;
    fetchOrders: (userId: string) => Promise<unknown>;
    fetchSpecificDetails: (id: string) => Promise<unknown>;
    deleteOrder: (id: string) => Promise<{success: boolean, status: number, message: string}>
}