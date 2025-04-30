import { Box, VStack, Image } from "@chakra-ui/react";
import Title from "../../../../ui/Title";
import EmptyCart from "../../../../../assets/empty-cart.png";

const UserShopCategoriesEmpty = () => {
  return (
    <Box
      w={"full"}
      h={"full"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack align={"center"}>
        <Image src={EmptyCart} boxSize={"16"} />
        <Title>No products yet</Title>
      </VStack>
    </Box>
  );
};

export default UserShopCategoriesEmpty;
