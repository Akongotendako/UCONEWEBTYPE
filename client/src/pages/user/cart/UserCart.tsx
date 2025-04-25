import { Stack } from "@chakra-ui/react";
import cartStore from "../../../stores/cartStore";
import { useEffect } from "react";
import UserCartProductContainer from "../../../components/features/user/user-cart/product/UserCartProductContainer";
import UserCartCheckOut from "../../../components/features/user/user-cart/check-out/UserCartCheckOut";

const UserCart = () => {
  const userId = localStorage.getItem("userId");
  const fetchCart = cartStore((state) => state.fetchCart);
  const cart = cartStore((state) => state.cart.items);

  useEffect(() => {
    fetchCart(userId as string);
  }, [userId, fetchCart]);

  return (
    <Stack w={"full"} p={5}>
      <UserCartProductContainer cart={cart} />
      {cart.length > 0 && <UserCartCheckOut />}
    </Stack>
  );
};

export default UserCart;
