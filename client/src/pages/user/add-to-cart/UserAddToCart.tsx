import {
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productStore from "../../../stores/productStore";
import cartStore from "../../../stores/cartStore";
import AddToCartContainer from "../../../components/features/user/user-add-to-cart/AddToCartContainer";
const UserAddToCart = () => {
  const { id } = useParams();
  const { getProduct} =
    productStore();
  const { cartItem, cart} = cartStore();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getProduct(id as string);
    cart.userId = userId as string;
    cartItem.productId = id as string;
  }, [cart, cartItem, getProduct, id, userId]);

  return (
    <Flex w={"full"} direction={"column"} gap={10}>
      <AddToCartContainer/>
    </Flex>
  );
};

export default UserAddToCart;
