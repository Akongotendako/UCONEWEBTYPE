import { Flex, HStack } from "@chakra-ui/react";
import Title from "../../../components/ui/Title";
import UserCheckBillingDetailsContainer from "../../../components/features/user/user-checkout/billing-details/UserCheckBillingDetailsContainer";
import UserCheckOutOrderSummary from "../../../components/features/user/user-checkout/order-summary/UserCheckOutOrderSummary";
import cartStore from "../../../stores/cartStore";
import { useEffect } from "react";
import userStore from "../../../stores/userStore";

const UserCheckout = () => {

  const userId = localStorage.getItem("userId");
  const { fetchCart} = cartStore()
  const {fetchProfile} = userStore()

  useEffect(() => {
    fetchCart(userId as string)
    fetchProfile(userId as string)

  }, [fetchCart, userId, fetchProfile])
  

  return (
    <Flex w={"full"} direction={"column"} gap={10}>
      {/** title */}
      <Title>Checkout</Title>
      <HStack w={"full"} align={"flex-start"} gap={5}>
        <UserCheckBillingDetailsContainer />
        <UserCheckOutOrderSummary />
      </HStack>
    </Flex>
  );
};

export default UserCheckout;
