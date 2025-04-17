
export interface IImage {
  file?: File;
  url?: string;
}

export interface IOriginalImages {
  url?: string;
  publicId?: string;
}

export interface IProduct {
  _id: string;
  productName: string;
  description: string;
  price: string;
  stock: string;
  discount: string;
  images: IImage[];
  isLimitReach: boolean;
  products: string[];
  sizes: string[];
  category: string;
  originalImages: IOriginalImages[];
  isLimit: boolean
}

export interface IProductState {
  product: IProduct;
  products: IProduct[];

  setField: <
    K extends keyof IProduct
  >(
    field: K,
    value: IProduct[K]
  ) => void;

  addImage: (newImages: IImage) => void;
  removeImage: (index: number) => void;
  updateImage: (index: number, newImage: IImage) => void;
  addSize: (size: string) => void;
  addProduct: () => Promise<{success: boolean; status: number; error?: string; message: string}>;
  getProducts: () => Promise<unknown>;
  deleteProduct: (id: string) => Promise<{success: boolean; status: number; error?: string; message: string}>;
  clearAllProperties: () => void;
  isCategoryLanyard: () => void;
  getProduct: (id: string) => Promise<unknown>;
  updateProduct: (id: string) => Promise<{success: boolean; status: number; error?: string; message: string}>;
}

export interface IProductStore {
  product: IProduct;
}
