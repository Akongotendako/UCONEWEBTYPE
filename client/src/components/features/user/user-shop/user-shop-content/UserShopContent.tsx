import { Grid, VStack, Box, RatingGroup, Image } from "@chakra-ui/react";
import Description from "../../../../ui/Description";
import Title from "../../../../ui/Title";
import productStore from "../../../../../stores/productStore";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../../../routes/user/userRoute";

const UserShopContent = () => {
  const navigate = useNavigate();
  const { products } = productStore();
  const handleNavigation = (id: string) =>
    navigate(`${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/${id}/cart`);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      {products.map((product) => (
        <VStack
          rounded={"md"}
          borderWidth={"1px"}
          borderColor={"#FFF"}
          p={5}
          align={"flex-start"}
          key={product._id}
          cursor={"pointer"}
          onClick={() => handleNavigation(product._id)}
        >
          <Box w={"full"} position={"relative"}>
            <Image
              src={product.images[0]?.url}
              w={"full"}
              h={"40"}
              rounded={"sm"}
            />
            <Box
              position={"absolute"}
              top={2}
              left={2}
              bg={"#243647"}
              py={1}
              px={3}
              color={"#FFFFFF80"}
              rounded={"sm"}
            >
              SALE
            </Box>
          </Box>

          {/** Title */}
          <Title textStyle="lg">{product.productName}</Title>

          {/** Description */}
          <Description lineClamp={3}>{product.description}</Description>

          <Title textStyle="sm">{`₱ ${product.price}`}</Title>

          {/** Rating */}

          <RatingGroup.Root count={5} defaultValue={3} size="sm">
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        </VStack>
      ))}
    </Grid>
  );
};

export default UserShopContent;
