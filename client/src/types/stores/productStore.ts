import { create } from "zustand";
import { IImage, IProductStore } from "../product.type";
import { addProduct } from "../../services/product.service";

export const productStore = create<IProductStore>((set, get) => ({
  product: {
    productName: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    images: [
      {
        url: "",
      },
    ],
    isLimitReach: false,
    products: [],
    sizes: [],
    category: "",
    originalImages: [{ url: "", publicId: "" }],
  },

  setSizes: (size: string) =>
    set((state) => {
      if (state.product.sizes.includes(size)) {
        return {
          product: {
            ...state.product,
            sizes: state.product.sizes.filter(
              (filterSize) => filterSize !== size
            ),
          },
        };
      }

      return {
        product: {
          ...state.product,
          sizes: [...state.product.sizes, ...size],
        },
      };
    }),

  setField: (field: string, value: string) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),

  setImages: (newImages: IImage[], index: number) => {
    set((state) => {
      const updatedImages = [...state.product.images];

      if (index !== undefined) {
        updatedImages[index] = newImages[0];
      } else {
        updatedImages.push(...newImages);
      }

      return {
        product: {
          ...state.product,
          images: updatedImages,
        },
      };
    });
  },

  addProduct: async () => {
    try {
      const formData = new FormData();
      formData.append("productName", get().product.productName);
      formData.append("description", get().product.description);
      formData.append("price", get().product.price);
      formData.append("stock", get().product.stock);
      formData.append("discount", get().product.discount);
      formData.append("category", get().product.category);
      get().product.sizes.forEach((size) => {
        formData.append("sizes", size);
      });

      const filteredImages = get().product.images.filter((image) => image.file);
      filteredImages.forEach((file) => {
        if (file.file) {
          formData.append("images", file.file);
        }
      });

      const response = await addProduct(formData);
      return response;
    } catch (error) {
      return error;
    }
  },
}));
