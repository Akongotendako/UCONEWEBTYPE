import { Flex } from "@chakra-ui/react";
import UserOrderDetailsRightContent from "./UserOrderDetailsRightContent";
import UserOrderDetailsLeftContent from "./UserOrderDetailsLeftContent";
import { useParams } from "react-router-dom";
import orderStore from "../../../../../stores/orderStore";
import { useEffect } from "react";
import reviewStore from "../../../../../stores/reviewStore";

const UserOrderDetailsContainer = () => {
  
  const { _id } = useParams();
  const { order, fetchSpecificDetails } = orderStore();
  const {checkUserReview} = reviewStore();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchSpecificDetails(_id as string);
    checkUserReview(userId as string, _id as string)
  }, [_id, fetchSpecificDetails, checkUserReview, userId]);

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
