import { For, Stack } from "@chakra-ui/react";
import cartStore from "../../../stores/cartStore";
import { useEffect } from "react";
import CartContainer from "../../../components/cart-user/CartContainer";

const UserCart = () => {
  const userId = localStorage.getItem("userId");
  const { fetchCart, cart } = cartStore();

  useEffect(() => {
    fetchCart(userId as string);
  }, [userId, fetchCart]);

  return (
    <Stack w={"full"} p={5}>
      <For each={
        cart.items
      } >
        {(item, index) => (
          <CartContainer item={item}/>
        )}
      </For>
    </Stack>
  );
};

export default UserCart;
