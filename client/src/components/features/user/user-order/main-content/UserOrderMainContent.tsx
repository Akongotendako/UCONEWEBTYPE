import { Flex, For, HStack, Status } from "@chakra-ui/react";
import Title from "../../../../ui/Title";
import UserOrderMainContentImages from "./UserOrderMainContentImages";
import { useEffect } from "react";
import orderStore from "../../../../../stores/orderStore";
import Description from "../../../../ui/Description";
import { dateFormatter } from "../../../../utils/dateFormatter";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../../../routes/user/userRoute";

const UserOrderMainContent = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const { fetchOrders, orders } = orderStore();

  const handleOrderDetailsNavigation = (_id: string) => {
    navigate(`${USER_ROUTES.USER_ORDER_DETAILS.replace(":_id", _id)}`)
  };

  useEffect(() => {
    fetchOrders(userId as string);
  }, [userId, fetchOrders]);

  return (
    <Flex w={"full"} direction={"column"} gap={5}>
      {/** Title */}
      <Title>Order History</Title>
      {/** Container for each box */}
      <For each={orders}>
        {(order, index) => (
          <HStack
            w={"full"}
            p={5}
            rounded={"md"}
            borderColor={"#FFFFFF80"}
            borderWidth={"1px"}
            justify={"space-between"}
            cursor={"pointer"}
            onClick={() => handleOrderDetailsNavigation(order._id as string)}
            key={index}
          >
            {/** Total item bought by customer and number of images for each product */}
            <UserOrderMainContentImages products={order.products} />

            {/** Date by the time of purchases */}
            <Description>{dateFormatter(order.createdAt)}</Description>

            {/** Payment method either cash or gcash */}
            <Description>{order.paymentMethod}</Description>

            {/** status */}
            <Status.Root
              size={"md"}
              width="100px"
              colorPalette="orange"
              color={"#FFFFFF80"}
            >
              <Status.Indicator />
              {order.paymentStatus}
            </Status.Root>

            {/** Total for each order */}
            <Description>₱{order.totalAmount}</Description>
          </HStack>
        )}
      </For>
    </Flex>
  );
};

export default UserOrderMainContent;
