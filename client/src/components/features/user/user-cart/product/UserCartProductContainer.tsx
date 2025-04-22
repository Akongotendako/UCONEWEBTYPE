import { For, HStack } from "@chakra-ui/react";
import { ICart } from "../../../../../types/cart.type";
import UserCartProductImage from "./UserCartProductImage";
import UserCartProductDetails from "./UserCartProductDetails";

interface UserCartProductContainerProps {
  cart: ICart;
}

const UserCartProductContainer = ({ cart }: UserCartProductContainerProps) => {
  return (
    <For each={cart.items}>
      {(item) => (
        <HStack
          borderColor={"#FFFFFF80"}
          borderWidth={"1px"}
          rounded={"md"}
          p={5}
          align={"flex-start"}
        >
            <UserCartProductImage source={item.product.images[0]?.url as string}/>

           {/** Product details */}
           <UserCartProductDetails/>
        </HStack>
      )}
    </For>
  );
};

export default UserCartProductContainer;
