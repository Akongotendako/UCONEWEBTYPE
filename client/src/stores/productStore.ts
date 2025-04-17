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
  },
  products: [] as IProduct[],

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
    console.log(response.data.response);
    set({ products: response.data.response });
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
  clearAllProperties: () =>
    set((state) => ({
      ...state,
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
      },
    })),
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
        productName: response.data.response.productName as string,
        description: response.data.response.description as string,
        price: response.data.response.price as string,
        stock: response.data.response.stock as string,
        discount: response.data.response.discount as string,
        images: response.data.response.images as IImage[],
        sizes: response.data.response.sizes as string[],
        category: response.data.response.category as string,
        originalImages: response.data.response.images as IImage[],
        _id: "",
        isLimitReach: false,
        products: [],
        isLimit: false,
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
}));

export default productStore;
