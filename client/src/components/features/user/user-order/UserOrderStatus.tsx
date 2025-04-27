import { Status } from "@chakra-ui/react";
import { IOrder } from "../../../../types/order.type";

interface UserOrderStatusProps {
  order: IOrder
}

const UserOrderStatus = (props: UserOrderStatusProps) => {

  return (
    <Status.Root size={'md'} width="100px" colorPalette="orange" color={"#FFFFFF80"}>
      <Status.Indicator />
      {props.order.paymentStatus}
    </Status.Root>
  );
};

export default UserOrderStatus;
