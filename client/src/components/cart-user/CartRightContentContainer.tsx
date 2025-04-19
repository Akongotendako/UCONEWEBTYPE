import { Box, HStack, IconButton, Input, VStack } from "@chakra-ui/react";
import Title from "../typography/Title";
import Description from "../typography/Description";
import { GoPlus } from "react-icons/go";

const CartRightContentContainer = () => {
  return (
    <VStack w={"1/2"} align={"flex-start"} gap={10}>
      {/** Product name and price */}
      <HStack w={"full"} gap={"18rem"}>
        <VStack align={"flex-start"}>
          <Title>Product name</Title>
          <Description>Uniform</Description>
        </VStack>
        <VStack align={"flex-start"}>
          <Title>Price</Title>
          <Description>555</Description>
        </VStack>
      </HStack>

      {/** Discount */}
      <VStack align={"flex-start"}>
        <Title>Discount</Title>
        <Description>20% off</Description>
      </VStack>

      {/** Quantity */}
      <HStack w={"full"} align={"flex-start"} gap={"21rem"}>
        <Title>Quantity</Title>
        <HStack
          borderWidth={"1px"}
          borderColor={"#FFFFFF80"}
          rounded={"sm"}
          align={"stretch"}
        >
          <Box w={5} h={"full"} bg={"#FFF"}>
            -
          </Box>
          <Input
            type="number"
            textAlign="center"
            value={2}
            disabled
            flex="1"
            border={"none"}
            w={"14"}
            color={"#FFF"}
            size={"sm"}
          />
          <IconButton as={GoPlus} size={"xs"} rounded={"none"} />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default CartRightContentContainer;
