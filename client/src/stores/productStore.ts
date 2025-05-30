import { create } from "zustand";
import {
  IImage,
  IOriginalImages,
  IProduct,
  IProductState,
} from "../types/product.type";
import { interceptorError } from "../types/interceptor.error.type";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductByCategory,
  getProducts,
  updateProduct,
} from "../services/product.service";

const productStore = create<IProductState>((set, get) => ({
  product: {
    _id: "",
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
    quantity: "",
    total: "",
    discountedPrice: 0,
    saveAmount: 0,
    averageRating: 0,
    ratingCount: 0,
  },
  products: [] as IProduct[],
  currentIndex: 1,

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
  addSize: (size) =>
    set((state) => {
      const currentSizes = state.product.sizes.filter((s) => s !== size);
      if (currentSizes.length === state.product.sizes.length) {
        return {
          ...state,
          product: {
            ...state.product,
            sizes: [...currentSizes, size],
          },
        };
      }
      return {
        ...state,
        product: {
          ...state.product,
          sizes: currentSizes,
        },
      };
    }),
  addProduct: async () => {
    try {
      const {
        productName,
        description,
        price,
        stock,
        discount,
        category,
        sizes,
        images,
      } = get().product;

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("discount", discount);
      formData.append("category", category);
      sizes.forEach((size) => {
        formData.append("sizes", size);
      });

      const filteredImages = images.filter(
        (image): image is { file: File } => !!image.file
      );
      filteredImages.forEach((file) => {
        formData.append("images", file.file);
      });

      const response = await addProduct(formData);

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

  getProducts: async () => {
    const response = await getProducts();
    set({ products: response.data.data });
  },
  deleteProduct: async (id) => {
    try {
      const response = await deleteProduct(id);
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
  clearAllProperties: () => {
    set({
      product: {
        _id: "",
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
        quantity: "",
        total: "",
        discountedPrice: 0,
        saveAmount: 0,
        averageRating: 0,
        ratingCount: 0,
      } as IProduct,
      products: [],
    });
  },
  isCategoryLanyard: () =>
    set((state) => ({
      ...state,
      product: {
        ...state.product,
        sizes: [],
      },
    })),
  getProduct: async (id) => {
    const response = await getProduct(id);
    set({
      product: {
        productName: response.data.data.productName as string,
        description: response.data.data.description as string,
        price: response.data.data.price as string,
        stock: response.data.data.stock as string,
        discount: response.data.data.discount as string,
        images: response.data.data.images as IImage[],
        sizes: response.data.data.sizes as string[],
        category: response.data.data.category as string,
        originalImages: response.data.data.images as IImage[],
        _id: "",
        isLimitReach: false,
        products: [],
        isLimit: false,
        total: "",
        quantity: "",
        discountedPrice: response.data.data.discountedPrice,
        saveAmount: response.data.data.saveAmount,
        averageRating: response.data.data.averageRating,
        ratingCount: response.data.data.ratingCount,
      },
    });
  },

  updateProduct: async (id) => {
    try {
      const {
        productName,
        description,
        price,
        stock,
        discount,
        category,
        sizes,
        images,
        originalImages,
      } = get().product;

      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("discount", discount);
      formData.append("category", category);
      sizes.forEach((size) => {
        formData.append("sizes", size);
      });

      const updatedImages = images.filter(
        (image): image is { file: File } => !!image.file
      );
      updatedImages.forEach((file) => {
        formData.append("images", file.file);
      });

      const existingImages = images.filter((image) => !image.file);

      formData.append("existingImages", JSON.stringify(existingImages));
      formData.append("originalImages", JSON.stringify(originalImages));

      const response = await updateProduct(id, formData);
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
  getProductByCategory: async (category) => {
    if (!category) {
      const response = await getProducts();
      set({ products: response.data.data });
    } else {
      const response = await getProductByCategory(category);
      set({ products: response.data.data });
    }
  },
  setIndex: (index) =>
    set((state) => ({
      ...state,
      currentIndex: index,
    })),
  nextImage: () =>
    set((state) => ({
      ...state,
      currentIndex: (state.currentIndex + 1) % state.product.images.length,
    })),
  prevImage: () =>
    set((state) => ({
      ...state,
      currentIndex:
        (state.currentIndex - 1 + state.product.images.length) %
        state.product.images.length,
    })),
}));

export default productStore;
