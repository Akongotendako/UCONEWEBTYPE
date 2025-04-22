import { HStack, IconButton, NumberInput, RatingGroup, VStack } from "@chakra-ui/react";
import Title from "../typography/Title";
import Description from "../typography/Description";
import { LuMinus, LuPlus } from "react-icons/lu";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";

const RightContainer = () => {

  const {addCart, increment, decrement, cartItem} = cartStore()
  const {product} = productStore()
  return (
    <VStack w={"1/2"} align={"flex-start"}>
      {/** Product name */}
      <Title>{product.productName}</Title>

      {/** rating */}
      <HStack>
        <RatingGroup.Root count={5} defaultValue={3} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <Description>100 reviews</Description>
      </HStack>

      {/** Price */}
      <HStack gap={5} mt={5}>
        <Title color="#FFFFFF80" underline="line-through">
          ₱500
        </Title>
        <Title>₱300</Title>
      </HStack>

      {/** You have same info */}
      <Description fontStyle="italic">(You have saved ₱200)</Description>

      {/** Quantity */}
      <VStack mt={10} align={"flex-start"} gap={5}>
        <Title>Quantity:</Title>
        <NumberInput.Root value={String(cartItem.quantity)} unstyled spinOnPress={false}>
          <HStack gap="2">
            <NumberInput.DecrementTrigger asChild>
              <IconButton variant="outline" size="sm" color={"#FFFFFF80"} onClick={decrement}>
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
              <IconButton variant="outline" size="sm" color={"#FFFFFF80"} onClick={increment}>
                <LuPlus />
              </IconButton>
            </NumberInput.IncrementTrigger>
          </HStack>
        </NumberInput.Root>
      </VStack>

      {/** Buttons */}
      <HStack gap={5} mt={10}>
        <PrimaryButton >BUY NOW</PrimaryButton>
        <SecondaryButton onClick={addCart}>ADD TO CART</SecondaryButton>
      </HStack>
    </VStack>
  );
};

export default RightContainer;
