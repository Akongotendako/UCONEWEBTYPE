import { HStack, VStack } from "@chakra-ui/react";

const UserPaymentContainer = () => {
  return (
    <VStack w={"full"} justify={"center"} align={"center"} gap={5} mt={"3.125rem"}>
      <HStack
        w={40}
        h={40}
        rounded={"md"}
        borderColor={"#FFFFFF80"}
        p={5}
        borderWidth={"1px"}
        justify={"center"}
        color={"#FFFFFF80"}
      >
        CASH
      </HStack>
      <HStack
        w={40}
        h={40}
        rounded={"md"}
        borderColor={"#FFFFFF80"}
        p={5}
        borderWidth={"1px"}
        justify={"center"}
        color={"#FFFFFF80"}
      >
        GCASH
      </HStack>
    </VStack>
  );
};

export default UserPaymentContainer;
