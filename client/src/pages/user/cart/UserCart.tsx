import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import Title from "../../../components/typography/Title";
import Description from "../../../components/typography/Description";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import cartStore from "../../../stores/cartStore";
import { useEffect } from "react";

const UserCart = () => {
  const userId = localStorage.getItem("userId");
  const { fetchCart, carts } = cartStore();

  useEffect(() => {
    fetchCart(userId as string);
  }, [userId, fetchCart]);

  return (
    <Box w={"full"} p={5}>
      {carts.map((cart) => (
        <HStack
          borderColor={"#FFF"}
          rounded={"md"}
          w={"full"}
          borderWidth={"1px"}
          p={5}
          align={"flex-start"}
        >
          <Box w={"1/2"}>
            <Image src={cart.productId.images[0]?.url} boxSize={"60"} rounded={"sm"} />
          </Box>
          <VStack align={"flex-start"} w={"1/2"} gap={8}>
            {/** Product Name */}
            <VStack align={"flex-start"}>
              <Title>Product Name</Title>
              <Description>{cart.productId.productName}</Description>
            </VStack>

            {/** Quantity */}
            <VStack align={"flex-start"} w={"full"}>
              <Title>Quantity</Title>
              <HStack w={"full"} gap={5}>
                <SecondaryButton width="1/4">-</SecondaryButton>
                <Description>{cart.quantity}</Description>
                <PrimaryButton width="1/4">+</PrimaryButton>
              </HStack>
            </VStack>

            {/** Price */}
            <VStack align={"flex-start"}>
              <Title>Price</Title>
              <Description>{cart.productId.price}</Description>
            </VStack>

            {/** Total */}
            <VStack align={"flex-start"}>
              <Title>Total</Title>
              <Description>Lanyard 222</Description>
            </VStack>
          </VStack>
        </HStack>
      ))}

      <HStack justify={"flex-end"} mt={5}>
        <VStack
          w={"1/2"}
          rounded={"md"}
          borderColor={"#FFF"}
          borderWidth={"1px"}
          p={5}
          align={"flex-start"}
          gap={8}
        >
          {/** Subtotal */}
          <VStack align={"flex-start"}>
            <Title>Subtotal</Title>
            <Description>Lanyard 222</Description>
          </VStack>
          {/** Discount */}
          <VStack align={"flex-start"}>
            <Title>Discount</Title>
            <Description>Lanyard 222</Description>
          </VStack>
          {/** Grand total */}
          <VStack align={"flex-start"}>
            <Title>Grand total</Title>
            <Description>Lanyard 222</Description>
          </VStack>
          <PrimaryButton>PROCEED TO CHECK OUT</PrimaryButton>
        </VStack>
      </HStack>
    </Box>
  );
};

export default UserCart;
