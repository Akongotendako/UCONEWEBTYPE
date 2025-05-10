import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../../../routes/admin/adminRoute";
import { USER_ROUTES } from "../../../routes/user/userRoute";
import ShopMenuContainer from "./shop-menu/ShopMenuContainer";
import { getUserRole } from "../../utils/role";
import CustomLink from "../custom-link/CustomLink";
import productStore from "../../../stores/productStore";
import cartStore from "../../../stores/cartStore";

const NavigationMenu = () => {
  const role = getUserRole(localStorage.getItem("role"));
  const { clearAllProperties } = productStore();
  const { clear } = cartStore();

  const navigate = useNavigate();

  const clearAllStoresProperties = () => {
    clearAllProperties();
  };

  const handleHomeNavigation = () => {
    clearAllStoresProperties();
    clear();
    navigate(role === "admin" ? ADMIN_ROUTE.ADMIN_HOME : USER_ROUTES.USER_HOME);
  };

  const handleStudentCartNavigation = () => {
    navigate(
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_STUDENT.ADMIN_STUDENT_BASED
        : USER_ROUTES.USER_CART
    );
  };

  const handleOrderNavigation = () => {
    navigate(
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_ORDER.ADMIN_ORDER_BASED
        : USER_ROUTES.USER_ORDER
    );
    clearAllStoresProperties();
  };

  return (
    <HStack gap={10}>
      {/** Home navigation */}
      <CustomLink onClick={handleHomeNavigation}>Home</CustomLink>

      {/** this is shop navigation */}
      <ShopMenuContainer role={role} />

      {/** Students for admin and cart for user navigation */}
      <CustomLink onClick={handleStudentCartNavigation}>
        {role === "admin" ? "Students" : "Cart"}
      </CustomLink>

      {/** Order navigation */}
      <CustomLink onClick={handleOrderNavigation}>Orders</CustomLink>
    </HStack>
  );
};

export default NavigationMenu;
