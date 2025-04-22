import { HStack, IconButton, NumberInput, VStack } from "@chakra-ui/react";

import { LuMinus, LuPlus } from "react-icons/lu";
import Description from "../ui/Description";
import Title from "../ui/Title";

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
        <NumberInput.Root defaultValue="3" unstyled spinOnPress={false}>
          <HStack gap="2">
            <NumberInput.DecrementTrigger asChild>
              <IconButton variant="outline" size="sm" color={"#FFFFFF80"}>
                <LuMinus />
              </IconButton>
            </NumberInput.DecrementTrigger>
            <NumberInput.ValueText
              textAlign="center"
              fontSize="lg"
              minW="3ch"
              color={"#FFFFFF80"}
            />
            <NumberInput.IncrementTrigger asChild>
              <IconButton variant="outline" size="sm" color={"#FFFFFF80"}>
                <LuPlus />
              </IconButton>
            </NumberInput.IncrementTrigger>
          </HStack>
        </NumberInput.Root>
      </HStack>
    </VStack>
  );
};

export default CartRightContentContainer;
