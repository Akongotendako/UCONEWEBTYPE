import { Flex, Stack } from "@chakra-ui/react";
import cartStore from "../../../stores/cartStore";
import { useEffect } from "react";
import UserCartProductContainer from "../../../components/features/user/user-cart/product/UserCartProductContainer";
import { Outlet, useLocation } from "react-router-dom";
import { USER_ROUTES } from "../../../routes/user/userRoute";
import UserCartCheckout from "./checkout/UserCartCheckout";

const UserCart = () => {
  const userId = localStorage.getItem("userId");
  const fetchCart = cartStore((state) => state.fetchCart);
  const cart = cartStore((state) => state.cart.items);
  const location = useLocation();

  useEffect(() => {
    fetchCart(userId as string);
  }, [userId, fetchCart]);

  if (
    location.pathname == USER_ROUTES.USER_CHECKOUT ||
    location.pathname == USER_ROUTES.USER_Payment
  ) {
    return (
      <Flex w={"full"} p={5} direction={"column"}>
        <Outlet />
      </Flex>
    );
  }

  return (
    <Stack w={"full"} p={5}>
      <UserCartProductContainer cart={cart} />
      {cart.length > 0 && <UserCartCheckout />}
    </Stack>
  );
};

export default UserCart;
