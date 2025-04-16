import { create } from "zustand";
import {
  IImage,
  IOriginalImages,
  IProduct,
  IProductState,
} from "../types/product.type";

const productStore = create<IProductState>((set, get) => ({
  product: {
    productName: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    images: [] as IImage[],
    isLimitReach: false,
    products: [] as string[],
    sizes: [] as string[],
    category: "",
    originalImages: [] as IOriginalImages[],
    isLimit: false as boolean,
  },

  setField: <K extends keyof IProduct>(field: K, value: IProduct[K]) =>
    set((state) => ({
      ...state,
      product: {
        ...state.product,
        [field]: value,
      },
    })),

  addImage: (image) =>
    set((state) => {
      const currentImages = state.product.images;

      if (currentImages.length >= 6) {
        return {
          ...state,
          product: {
            ...state.product,
            isLimit: true,
          },
        };
      }
      return {
        ...state,
        product: {
          ...state.product,
          images: [...currentImages, image],
        },
      };
    }),
  removeImage: (index) =>
    set((state) => {
      const updateImages = state.product.images.filter((_, i) => i !== index);
      return {
        ...state,
        product: {
          ...state.product,
          images: updateImages,
          isLimit: updateImages.length === 6,
        },
      };
    }),

  updateImage: (index, newImage) =>
    set((state) => {
      const updateImages = [...state.product.images];
      updateImages[index] = newImage;
      return {
        ...state,
        product: {
          ...state.product,
          images: updateImages,
          isLimit: updateImages.length === 6,
        },
      };
    }),
}));

export default productStore;
