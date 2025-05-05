import { Document } from "mongoose";
export interface IImage {
  url: string;
  publicId: string;
}

export interface IOriginalImages {
  url?: string;
  publicId?: string;
}

export interface IProduct {
  _id?: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  discount: string;
  images: IImage[];
  sizes: string[];
  category: string;
  averageRating: number;
  ratingCount: number;

}

export type IProductDocument = Document<unknown, {}, IProduct> & IProduct;
