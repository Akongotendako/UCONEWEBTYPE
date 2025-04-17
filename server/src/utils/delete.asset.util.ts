import cloudinary from "../config/cloudinary.js";
import { IImage, IOriginalImages } from "../types/product.type.js";

export const deleteAnAsset = (
  originalImages: IOriginalImages[],
  existingImages: IImage[]
) => {
  if (originalImages.length > 0) {
    originalImages.forEach((origImage) => {
      if (
        origImage.publicId &&
        !existingImages.some((image) => image.publicId === origImage.publicId)
      ) {
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
    });
  }
};
