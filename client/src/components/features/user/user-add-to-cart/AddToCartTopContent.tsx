import { Box, Center, HStack, Icon, VStack, Image, IconButton, NumberInput, RatingGroup } from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import productStore from "../../../../stores/productStore";
import cartStore from "../../../../stores/cartStore";
import { LuMinus, LuPlus } from "react-icons/lu";
import Description from "../../../ui/Description";
import PrimaryButton from "../../../ui/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton";
import Title from "../../../ui/Title";

const AddToCartTopContent = () => {
  const { product, nextImage, prevImage, setIndex, currentIndex } = productStore();
  const { cartItem, decrement, increment, addCart } = cartStore();
  return (
    <HStack
      h={"500px"}
      w={"full"}
      align={"flex-start"}
      p={5}
      overflow={"hidden"}
      borderWidth={"1px"}
      borderColor={"#FFFFFF80"}
      rounded={"md"}
    >
      <HStack w={"1/2"} align={"flex-start"} h={"full"}>
        {/** Images menu */}
        <VStack w={36} h={"full"} position={"relative"}>
          <Center>
            <Icon
              as={IoIosArrowUp}
              size={"md"}
              color={"#FFFFFF80"}
              onClick={prevImage}
            />
          </Center>
          <Box flex="1" overflow="hidden" maxH="calc(100% - 60px)" w="full">
            <VStack gap={2} py={1}>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  objectFit={"cover"}
                  boxSize={"100px"}
                  onClick={() => setIndex(index)}
                />
              ))}
            </VStack>
          </Box>
          <Center>
            <Icon
              as={IoIosArrowDown}
              size={"md"}
              color={"#FFFFFF80"}
              position={"absolute"}
              bottom={0}
              onClick={nextImage}
            />
          </Center>
        </VStack>

        {/** Main image box */}
        <Image
          src={product.images[currentIndex]?.url}
          w={96}
          h={"full"}
          rounded={"sm"}
        />
      </HStack>

      {/** Right content container */}
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

        {/** Buttons */}
        <HStack gap={5} mt={10}>
          <PrimaryButton>BUY NOW</PrimaryButton>
          <SecondaryButton onClick={addCart}>ADD TO CART</SecondaryButton>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default AddToCartTopContent;
