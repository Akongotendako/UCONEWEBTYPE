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
    description && price && stock && discount && sizes && category
  );
};

export const arePriceAndStockNumbers = (price: string, stock: string) => {
    return Boolean(Number(price) && Number(stock))
}


export const isImageFileEmpty = (files: { [fieldname: string]: File[]; } | File[] | undefined) => {

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
