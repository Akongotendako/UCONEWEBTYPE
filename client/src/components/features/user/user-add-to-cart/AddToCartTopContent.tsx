import {
  Box,
  Center,
  HStack,
  Icon,
  VStack,
  Image,
  IconButton,
  NumberInput,
  RatingGroup,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import productStore from "../../../../stores/productStore";
import cartStore from "../../../../stores/cartStore";
import { LuMinus, LuPlus } from "react-icons/lu";
import Description from "../../../ui/Description";
import PrimaryButton from "../../../ui/PrimaryButton";
import SecondaryButton from "../../../ui/SecondaryButton";
import Title from "../../../ui/Title";
import generalToast from "../../../utils/toaster";

const AddToCartTopContent = () => {
  const { product, nextImage, prevImage, setIndex, currentIndex } =
    productStore();
  const { cartItem, decrement, increment, addCart } = cartStore();

  const handleAddToCart = async () => {
    const response = await addCart();

    setTimeout(() => {
      generalToast({
        status: response.status,
        message: response.message,
        duration: 3000,
      });
    }, 1200);
  };
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
          <RatingGroup.Root
            value={product.averageRating}
            size="sm"
            colorPalette={"yellow"}
            readOnly
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
          <Description>
            {product.ratingCount > 0
              ? product.ratingCount > 1
                ? `${product.ratingCount} REVIEWS`
                : `${product.ratingCount} REVIEW`
              : "0 REVIEW"}
          </Description>
        </HStack>

        {/** Price */}
        <HStack gap={5} mt={5}>
          <Title color="#FFFFFF80" underline="line-through">
            {`₱${product.price}`}
          </Title>
          <Title>{`₱${product.discountedPrice}`}</Title>
        </HStack>

        {/** You have same info */}
        <Description fontStyle="italic">{`(You have saved ₱${product.saveAmount})`}</Description>

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
                  onClick={() => decrement("cartItem")}
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
                  onClick={() => increment("cartItem")}
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
          <SecondaryButton onClick={handleAddToCart}>
            ADD TO CART
          </SecondaryButton>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default AddToCartTopContent;
