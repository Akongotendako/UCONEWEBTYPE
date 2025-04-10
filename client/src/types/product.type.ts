export interface IImage {
  file?: File,
  url?: string
}

interface IProduct {
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
  originalImages: [
    {
      url?: string;
      publicId?: string;
    }
  ];
}

export interface IProductStore {
    product: IProduct
}
