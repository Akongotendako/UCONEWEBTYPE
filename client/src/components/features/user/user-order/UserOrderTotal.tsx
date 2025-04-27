import { IOrder } from "../../../../types/order.type";
import Description from "../../../ui/Description";

interface UserOrderTotalProps {
  order: IOrder
}

const UserOrderTotal = (props: UserOrderTotalProps) => {
  return <Description>₱{props.order.totalAmount}</Description>;
};

export default UserOrderTotal;
