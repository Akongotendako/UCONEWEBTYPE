import { HStack } from "@chakra-ui/react";
import ItemImage from "./ItemImage";
import { IItems } from "../../types/cart.type";
import CartRightContentContainer from "./CartRightContentContainer";

interface CartContainerProps {
    item: IItems
}

const CartContainer = ({item}: CartContainerProps) => {
  return (
    <HStack
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      rounded={"md"}
      p={5}
      align={"flex-start"}

    >

        <ItemImage imagePath={item.product.images[0]?.url as string}/>
        <CartRightContentContainer/>
    </HStack>
  );
};

export default CartContainer;
