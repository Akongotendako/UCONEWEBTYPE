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
import cartStore from "../../../../../stores/cartStore";
import { IItems } from "../../../../../types/cart.type";
import generalToast from "../../../../utils/toaster";

interface UserCartProductDetailsProps {
  item: IItems;
  index: number;
}

const UserCartProductDetails = ({
  item,
  index,
}: UserCartProductDetailsProps) => {
  const { increment, decrement, deleteCart } = cartStore();
  const userId = localStorage.getItem("userId");


  const handleDeleteCart = async() => {

    const response = await deleteCart(userId as string, item._id as string);

    generalToast({
      status: response.status,
      message: response.message,
      duration: 3000
    })
  }

  return (
    <VStack w={"1/2"} align={"flex-start"} position={"relative"}>
      {/** Product name */}
      <Title>{item.product.productName}</Title>

      {/** Price */}
      <HStack gap={5} mt={5}>
        <Title color="#FFFFFF80" underline="line-through">
          {`₱${item.originalPrice}`}
        </Title>
        <Title>{item.itemTotal}</Title>
      </HStack>

      {/** You have same info */}
      <Description fontStyle="italic">
        {`(You have saved ₱${item.discountPerItem} per unit)`}
      </Description>

      {/** Quantity */}
      <VStack mt={10} align={"flex-start"} gap={5}>
        <Title>Quantity:</Title>
        <NumberInput.Root
          value={String(item.quantity)}
          unstyled
          spinOnPress={false}
        >
          <HStack gap="2">
            <NumberInput.DecrementTrigger asChild>
              <IconButton
                variant="outline"
                size="sm"
                color={"#FFFFFF80"}
                onClick={() => decrement("cart", index)}
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
                onClick={() => increment("cart", index)}
              >
                <LuPlus />
              </IconButton>
            </NumberInput.IncrementTrigger>
          </HStack>
        </NumberInput.Root>
      </VStack>

      {/** Closed button */}
      <CloseButton
        position={"absolute"}
        right={1}
        variant={"ghost"}
        color={"#FFFFFF80"}
        _hover={{ color: "#000" }}
        onClick={handleDeleteCart}
      />
    </VStack>
  );
};

export default UserCartProductDetails;
