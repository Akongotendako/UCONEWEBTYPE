import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";
import { IOriginalImages } from "../types/originalImages.type.js";

export const areAllFieldsEmpty = ({
  productName,
  description,
  price,
  stock,
  discount,
  sizes,
  category,
}: {
  productName: string;
  description: string;
  price: string;
  stock: string;
  discount: string;
  sizes: string;
  category: string;
}) => {
  return Boolean(
    description && price && stock && discount && category
  );
};

export const arePriceAndStockNumbers = (price: string, stock: string) => {
    return Boolean(Number(price) && Number(stock))
}


export const isImageFileEmpty = (files: { [fieldname: string]: Express.Multer.File[]; } | Express.Multer.File[] | undefined) => {

    if (!files) {
        return true;
    }

    if (Array.isArray(files)) {
        return files.length === 0;
    }

    for (const fieldName in files) {
        if (files.hasOwnProperty(fieldName) && files[fieldName].length > 0) {
            return false;
        }
    }

    return true;
}

export const addImages = (files: Express.Multer.File[]) => {
  return files.map((file) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "UCONEWEB", resource_type: "auto" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      const readableStream = new Readable();
      readableStream.push(file.buffer);
      readableStream.push(null);
      readableStream.pipe(stream);
    });
  });
};


export const deleteAsset = (originalImages: IOriginalImages[], existingImages: IOriginalImages[]) => {
  if (originalImages.length > 0) {
    originalImages.forEach((origImage) => {
      if (
        !existingImages.some((image) => image.publicId === origImage.publicId)
      ) {
        if (origImage.publicId) {
          cloudinary.uploader.destroy(
            origImage.publicId,
            { resource_type: "image" },
            (error, result) => {
              if (error) {
                console.error("Error deleting asset:", error);
              } else if (result.result === "ok") {
                console.log("Asset successfully deleted:", result);
              } else {
                console.log("Deletion response:", result);
              }
            }
          );
        }
      }
    });
  }
}

