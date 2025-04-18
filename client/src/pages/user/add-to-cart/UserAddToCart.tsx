import {
  Box,
  HStack,
  VStack,
  Image,
  RatingGroup,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productStore from "../../../stores/productStore";
import Title from "../../../components/typography/Title";
import Description from "../../../components/typography/Description";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const UserAddToCart = () => {
  const { id } = useParams();
  const { products, getProduct, currentIndex, setIndex, nextImage, prevImage } =
    productStore();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getProduct(id as string);
  }, [getProduct, id]);

  const handleIncrementQuantity = () => setCounter(counter + 1);
  const handleDecrementQuantity = () => setCounter(counter - 1);

  return (
    <VStack w={"full"}>
      {products.map((product) => (
        <HStack gap={5} key={product._id} w={"full"} align={"flex-start"}>
          {/** Product Image */}
          <VStack w={"3/5"} align={"flex-start"}>
            <Box
              rounded={"md"}
              borderColor={"#FFF"}
              borderWidth={"1px"}
              p={5}
              w={"full"}
            >
              <Image
                src={product.images[currentIndex]?.url}
                fit={"cover"}
                w={"full"}
                h={"96"}
                rounded={"sm"}
              />
            </Box>

            <HStack
              w={"full"}
              align={"center"}
              rounded={"md"}
              borderColor={"#FFF"}
              borderWidth={"1px"}
              p={5}
              justify={"space-between"}
            >
              <Icon
                as={IoIosArrowBack}
                onClick={prevImage}
                color={"#FFFFFF80"}
              />
              <HStack gap={5}>
                {product.images.map((image, index) => (
                  <Image src={image.url} onClick={() => setIndex(index)} boxSize={"24"} rounded={"sm"}/>
                ))}
              </HStack>
              <Icon
                as={IoIosArrowForward}
                onClick={nextImage}
                color={"#FFFFFF80"}
              />
            </HStack>
          </VStack>
          {/** Right part */}
          <VStack w={"2/5"} gap={5}>
            {/** Title and rating */}
            <VStack
              rounded={"md"}
              borderColor={"#FFF"}
              borderWidth={"1px"}
              w={"full"}
              align={"flex-start"}
              p={5}
            >
              <Title>{product.productName}</Title>
              <Description>{`₱${product.price}`}</Description>
              <HStack w={"full"} justify={"space-between"}>
                <HStack gap={2}>
                  <RatingGroup.Root count={5} defaultValue={3} size="sm">
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                  </RatingGroup.Root>
                  <Description>(200)</Description>
                </HStack>
                <Box bg={"#243647"} px={5} rounded={"md"} color={"#FFFFFF80"}>
                  5.0
                </Box>
              </HStack>
            </VStack>

            {/** Description */}
            <VStack
              w={"full"}
              rounded={"md"}
              borderColor={"#FFF"}
              borderWidth={"1px"}
              p={5}
              align={"flex-start"}
            >
              <Title>Description</Title>
              <Description>{product.description}</Description>
            </VStack>

            {/** Quantity */}
            <VStack
              w={"full"}
              rounded={"md"}
              borderColor={"#FFF"}
              borderWidth={"1px"}
              p={5}
              align={"flex-start"}
            >
              <Title>Quantity</Title>
              <HStack w={"full"} gap={5} justify={"space-between"}>
                <SecondaryButton
                  width="auto"
                  flex={1}
                  onClick={handleDecrementQuantity}
                >
                  -
                </SecondaryButton>
                <Description textAlign="center">{counter}</Description>
                <PrimaryButton
                  width="auto"
                  flex={1}
                  onclick={handleIncrementQuantity}
                >
                  +
                </PrimaryButton>
              </HStack>
            </VStack>

            {/** Buttons */}
            <HStack w={"full"} gap={5}>
              <SecondaryButton width="auto" flex={1}>
                Buy Now
              </SecondaryButton>
              <PrimaryButton width="auto" flex={1}>
                Add to Cart
              </PrimaryButton>
            </HStack>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default UserAddToCart;
