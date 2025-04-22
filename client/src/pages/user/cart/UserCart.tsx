import { Stack } from "@chakra-ui/react";
import cartStore from "../../../stores/cartStore";
import { useEffect } from "react";
import UserCartProductContainer from "../../../components/features/user/user-cart/product/UserCartProductContainer";

const UserCart = () => {
  const userId = localStorage.getItem("userId");
  const { fetchCart, cart } = cartStore();

  useEffect(() => {
    fetchCart(userId as string);
  }, [userId, fetchCart]);

  return (
    <Stack w={"full"} p={5}>
      <UserCartProductContainer cart={cart}/>
    </Stack>
  );
};

export default UserCart;
