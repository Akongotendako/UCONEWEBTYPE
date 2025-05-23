import {
  VStack,
  HStack,
  NumberInput,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";
import cartStore from "../../../../../stores/cartStore";
import { IItems } from "../../../../../types/cart.type";
import Description from "../../../../ui/Description";
import Title from "../../../../ui/Title";
import generalToast from "../../../../utils/toaster";
import ScreenOverlay from "../../../../shared/overlay/ScreenOverlay";

interface UserCartMainContentDetailsProps {
  item: IItems;
  index: number;
}

const UserCartMainContentDetails = ({
  item,
  index,
}: UserCartMainContentDetailsProps) => {
  const { increment, decrement, deleteCart, isLoading } = cartStore();
  const userId = localStorage.getItem("userId");

  const handleDeleteCart = async () => {
    const response = await deleteCart(userId as string, item._id as string);

    generalToast({
      status: response.status,
      message: response.message,
      duration: 3000,
    });
  };

  return (
    <>
      {!isLoading ? (
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
      ) : (
        <ScreenOverlay />
      )}
    </>
  );
};

export default UserCartMainContentDetails;
