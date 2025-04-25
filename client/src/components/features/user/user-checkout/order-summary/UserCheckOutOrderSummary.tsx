import { Box, Flex, For, HStack, Separator } from "@chakra-ui/react";
import Title from "../../../../ui/Title";
import Description from "../../../../ui/Description";
import PrimaryButton from "../../../../ui/PrimaryButton";
import cartStore from "../../../../../stores/cartStore";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../../../routes/user/userRoute";

const UserCheckOutOrderSummary = () => {
  const { cart } = cartStore();
  const navigate = useNavigate()

  const handleNavigation = () => navigate(USER_ROUTES.USER_Payment)

  return (
    <Flex
      w={"1/2"}
      rounded={"md"}
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      p={5}
      direction={"column"}
    >
      <Title>Order Summary</Title>

      <HStack w={"full"} justify={"space-between"} mt={10} mb={3}>
        <Title>Product</Title>
        <Title>Subtotal</Title>
      </HStack>
      <Separator color={"#FFFFFF80"} />

      <Box mt={5}>
        <For each={cart.items}>
          {(item, index) => (
            <HStack w={"full"} justify={"space-between"} mt={index !== 0 ? "5" : ""}>
              <Description>{item.product.productName}</Description>
              <Description>₱{item.itemTotal}</Description>
            </HStack>
          )}
        </For>
      </Box>
      <Separator color={"#FFFFFF80"} mt={5} />

      <HStack w={"full"} justify={"space-between"} mt={10} mb={3}>
        <Description>Total</Description>
        <Description>₱{cart.total}</Description>
      </HStack>

      {/** Place order button */}
      <PrimaryButton onclick={handleNavigation}>Place Order</PrimaryButton>
    </Flex>
  );
};

export default UserCheckOutOrderSummary;
