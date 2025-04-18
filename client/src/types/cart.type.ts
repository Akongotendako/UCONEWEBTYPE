import { IProduct } from "./product.type";


export interface IItems {
    product: IProduct,
    quantity: number,
    itemTotal: number,
}
export interface ICart {
    userId: string,
    items: IItems[]
}

export interface ICartItem {
    productId: string,
    cartId: string,
    quantity: number,
    price: string
}

export interface ICarts {
    _id: string,
    productId: IProduct,
    cartId: ICart,
    quantity: number,
}

export interface ICartState {
    cart: ICart;
    cartItem: ICartItem;
    carts: ICarts[];
    increment: () => void;
    decrement: () => void;
    addCart: () => Promise<{success: boolean, status: number, message: string}>;
    fetchCart: (userId: string) => Promise<unknown>;
}