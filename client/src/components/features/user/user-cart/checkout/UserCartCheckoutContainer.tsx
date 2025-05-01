import { HStack } from "@chakra-ui/react";
import Title from "../../../../ui/Title";
import UserCartCheckoutBillingDetails from "./UserCartCheckoutBillingDetails";
import UserCartCheckoutSummary from "./UserCartCheckoutSummary";

const UserCartCheckoutContainer = () => {
  return (
    <>
      <Title>Checkout</Title>
      <HStack w={"full"} align={"flex-start"} gap={5}>
        <UserCartCheckoutBillingDetails />
        <UserCartCheckoutSummary />
      </HStack>
    </>
  );
};

export default UserCartCheckoutContainer;
