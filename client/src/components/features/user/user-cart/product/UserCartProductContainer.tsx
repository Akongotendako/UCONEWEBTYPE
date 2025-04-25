import { For, HStack } from "@chakra-ui/react";
import UserCartProductImage from "./UserCartProductImage";
import UserCartProductDetails from "./UserCartProductDetails";
import { IItems } from "../../../../../types/cart.type";

interface UserCartProductContainerProps {
  cart: IItems[]
}

const UserCartProductContainer = ({cart}: UserCartProductContainerProps) => {

  return (
    <For each={cart}>
      {(item, index) => (
        <HStack
          borderColor={"#FFFFFF80"}
          borderWidth={"1px"}
          rounded={"md"}
          p={5}
          align={"flex-start"}
          key={index}
        >
            <UserCartProductImage source={item.product.images[0]?.url as string}/>

           {/** Product details */}
           <UserCartProductDetails item={item} index={index}/>
        </HStack>
      )}
    </For>
  );
};

export default UserCartProductContainer;
