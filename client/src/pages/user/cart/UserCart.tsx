import { Box } from "@chakra-ui/react";
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
    <Box w={"full"} p={5}>
      {cart && (
        <>
          {cart.items.map((item) => (
            <CartContainer item={item} />
          ))}
        </>
      )}
    </Box>
  );
};

export default UserCart;
