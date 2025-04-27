import { Flex, For } from "@chakra-ui/react";
import Title from "../../../components/ui/Title";
import UserOrderContainer from "../../../components/features/user/user-order/UserOrderContainer";
import orderStore from "../../../stores/orderStore";
import { useEffect } from "react";

const UserOrder = () => {
  const userId = localStorage.getItem("userId");

  const { fetchOrders, order } = orderStore();

  useEffect(() => {
    fetchOrders(userId as string);
  }, [userId, fetchOrders]);

  return (
    <Flex w={"full"} p={5} direction={"column"} gap={5}>
      {/** Title */}
      <Title mb={10}>Order</Title>
      <For each={order}>
        {(order, index) => <UserOrderContainer order={order} index={index}/>}
      </For>
    </Flex>
  );
};

export default UserOrder;
