
export interface IImage {
  file?: File;
  url?: string;
}

export interface IOriginalImages {
  url?: string;
  publicId?: string;
}

export interface IProduct {
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
}

export interface IProductState {
  product: IProduct;

  setField: <
    K extends keyof IProduct
  >(
    field: K,
    value: IProduct[K]
  ) => void;
}

export interface IProductStore {
  product: IProduct;
}
