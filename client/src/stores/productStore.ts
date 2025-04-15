import { create } from "zustand";
import { IImage, IOriginalImages, IProduct, IProductState } from "../types/product.type";

const productStore = create<IProductState>((set, get) => ({
   product: {
    productName: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    images: [] as IImage[],
    isLimitReach: false,
    products:[] as string[],
    sizes: [] as string[],
    category: "",
    originalImages: [] as IOriginalImages[],
   },

   setField: <K extends keyof IProduct>(
    field: K,
    value: IProduct[K]
   ) => 
    set((state) => ({
        ...state,
        product: {
            ...state.product,
            [field]: value
        }
    }))
}));

export default productStore;