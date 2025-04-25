import { HStack, VStack } from "@chakra-ui/react";
import Title from "../../../../ui/Title";
import PrimaryButton from "../../../../ui/PrimaryButton";
import cartStore from "../../../../../stores/cartStore";

const UserCartCheckOut = () => {
  const { cart } = cartStore();
  return (
    <VStack align={"flex-end"} w={"full"} mt={5}>
      <VStack
        borderColor={"#FFFFFF80"}
        borderWidth={"1px"}
        w={"1/2"}
        align={"flex-start"}
        p={5}
        rounded={"md"}
      >
        <HStack gap={60} align={"flex-start"}>
          <Title>Total:</Title>
          <Title color="#FFFFFF80">{cart.total}</Title>
        </HStack>

        <PrimaryButton>CHECK OUT</PrimaryButton>
      </VStack>
    </VStack>
  );
};

export default UserCartCheckOut;
