import { HStack } from "@chakra-ui/react";
import UserOrderItemsOrder from "./UserOrderItemsOrder";
import UserOrderDatePurchased from "./UserOrderDatePurchased";
import UserOrderStatus from "./UserOrderStatus";
import UserOrderTotal from "./UserOrderTotal";
import UserOrderMethod from "./UserOrderMethod";
import { IOrder } from "../../../../types/order.type";

interface UserOrderContainerProps {
  order: IOrder
  index: number
}

const UserOrderContainer = (props: UserOrderContainerProps) => {
  return (
    <HStack
      w={"full"}
      rounded={"md"}
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      p={5}
      justify={"space-between"}
      cursor={"pointer"}
    >
      {/** Items order */}
      <UserOrderItemsOrder products={props.order.products}/>
      <UserOrderDatePurchased order={props.order}/>
      <UserOrderMethod order={props.order}/>
      <UserOrderStatus order={props.order}/>
      <UserOrderTotal order={props.order}/>
    </HStack>
  );
};

export default UserOrderContainer;
