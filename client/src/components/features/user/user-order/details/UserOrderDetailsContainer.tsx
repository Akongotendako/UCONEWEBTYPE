import { Flex } from "@chakra-ui/react";
import UserOrderDetailsRightContent from "./UserOrderDetailsRightContent";
import UserOrderDetailsLeftContent from "./UserOrderDetailsLeftContent";
import { useParams } from "react-router-dom";
import orderStore from "../../../../../stores/orderStore";
import { useEffect } from "react";

const UserOrderDetailsContainer = () => {
  
  const { _id } = useParams();
  const { order, fetchSpecificDetails } = orderStore();

  useEffect(() => {
    fetchSpecificDetails(_id as string);
  }, [_id, fetchSpecificDetails]);

  return (
    <Flex w={"full"} direction={"row"} gap={5} align={"flex-start"}>
      {/** Products or items */}
      <UserOrderDetailsLeftContent order={order} />

      {/** Order details */}
      <UserOrderDetailsRightContent products={order.products} />
    </Flex>
  );
};

export default UserOrderDetailsContainer;
