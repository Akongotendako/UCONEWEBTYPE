import {
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../../../routes/admin/adminRoute";
import { USER_ROUTES } from "../../../routes/user/userRoute";
import ShopMenuContainer from "./shop-menu/ShopMenuContainer";
import { getUserRole } from "../../utils/role";
import CustomLink from "../custom-link/CustomLink";

const NavigationMenu = () => {

  const role = getUserRole(localStorage.getItem("role"));

  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate(role === "admin" ? ADMIN_ROUTE.ADMIN_HOME : USER_ROUTES.USER_HOME);
  };

  const handleStudentCartNavigation = () => {
    navigate(
      role === "admin" ? ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM : USER_ROUTES.USER_CART
    );
  };

  const handleOrderNavigation = () => {
    navigate(
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM
        : USER_ROUTES.USER_ORDER
    );
  };

  return (
    <HStack gap={10}>
      
      {/** Home navigation */}
      <CustomLink onClick={handleHomeNavigation}>Home</CustomLink>

      {/** this is shop navigation */}
      <ShopMenuContainer role={role}/>

      {/** Students for admin and cart for user navigation */}
      <CustomLink onClick={handleStudentCartNavigation}>{role === "admin" ? "Students" : "Cart"}</CustomLink>

      {/** Order navigation */}
      <CustomLink onClick={handleOrderNavigation}>Orders</CustomLink>
    </HStack>
  );
};

export default NavigationMenu;
