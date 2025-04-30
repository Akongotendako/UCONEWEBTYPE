import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productStore from "../../../../stores/productStore";
import UserShopCategoriesEmpty from "../user-shop/user-shop-categories-empty/UserShopCategoriesEmpty";
import UserShopContent from "../user-shop/user-shop-content/UserShopContent";

const UserCategoryMenu = () => {
  const { category } = useParams();
  const { products, getProductByCategory } = productStore();

  useEffect(() => {
    getProductByCategory(category as string);
  }, [getProductByCategory, category]);

  return (
    <>
      {products.length > 0 ? (
        <UserShopContent/>
      ) : (
       <UserShopCategoriesEmpty/>
      )}
    </>
  );
};

export default UserCategoryMenu;
