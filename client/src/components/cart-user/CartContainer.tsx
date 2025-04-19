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
      borderTopColor={"#E2E8F0"}
      borderBottomColor={"#E2E8F0"}
      borderLeftColor={"transparent"}
      borderRightColor={"transparent"}
      borderWidth={"1px"}
      p={5}
      align={"flex-start"}

    >

        <ItemImage imagePath={item.product.images[0]?.url as string}/>
        <CartRightContentContainer/>
    </HStack>
  );
};

export default CartContainer;
