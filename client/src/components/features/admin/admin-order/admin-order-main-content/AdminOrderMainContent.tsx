import { For, HStack } from "@chakra-ui/react";
import AdminOrderMainContentImageAndItems from "./AdminOrderMainContentImageAndItems";
import orderStore from "../../../../../stores/orderStore";
import { useEffect } from "react";

const AdminOrderMainContent = () => {
  const { fetchAllUsersOrders, orders } = orderStore();

  useEffect(() => {
    fetchAllUsersOrders();
  }, [fetchAllUsersOrders]);

  return (
    <For each={orders}>
      {(order, index) => (
        <HStack
          w={"full"}
          rounded={"md"}
          borderWidth={"1px"}
          borderColor={"#FFFFFF80"}
          p={5}
          key={index}
        >
          <AdminOrderMainContentImageAndItems products={order.products} />
        </HStack>
      )}
    </For>
  );
};

export default AdminOrderMainContent;
