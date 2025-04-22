import {
    CloseButton,
  HStack,
  IconButton,
  NumberInput,
  VStack,
} from "@chakra-ui/react";
import Title from "../../../../ui/Title";
import { LuMinus, LuPlus } from "react-icons/lu";
import Description from "../../../../ui/Description";
import productStore from "../../../../../stores/productStore";
import cartStore from "../../../../../stores/cartStore";

const UserCartProductDetails = () => {
  const { product } = productStore();
  const { cartItem, increment, decrement, addCart } = cartStore();

  return (
    <VStack w={"1/2"} align={"flex-start"} position={"relative"}>
      {/** Product name */}
      <Title>Lanyard 2024</Title>

      {/** Price */}
      <HStack gap={5} mt={5}>
        <Title color="#FFFFFF80" underline="line-through">
          ₱500
        </Title>
        <Title>₱300</Title>
      </HStack>

      {/** You have same info */}
      <Description fontStyle="italic">
        (You have saved ₱200 per unit)
      </Description>

      {/** Quantity */}
      <VStack mt={10} align={"flex-start"} gap={5}>
        <Title>Quantity:</Title>
        <NumberInput.Root
          value={String(cartItem.quantity)}
          unstyled
          spinOnPress={false}
        >
          <HStack gap="2">
            <NumberInput.DecrementTrigger asChild>
              <IconButton
                variant="outline"
                size="sm"
                color={"#FFFFFF80"}
                onClick={decrement}
              >
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
              <IconButton
                variant="outline"
                size="sm"
                color={"#FFFFFF80"}
                onClick={increment}
              >
                <LuPlus />
              </IconButton>
            </NumberInput.IncrementTrigger>
          </HStack>
        </NumberInput.Root>
      </VStack>

      {/** Closed button */}
      <CloseButton position={"absolute"} right={1} variant={"ghost"} color={"#FFFFFF80"} _hover={{color: "#000"}}/>
    </VStack>
  );
};

export default UserCartProductDetails;
