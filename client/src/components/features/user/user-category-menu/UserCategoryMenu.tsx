import { Box, Grid, RatingGroup, VStack, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import EmptyCart from "../../../../assets/empty-cart.png";
import { useParams, useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../../routes/user/userRoute";
import productStore from "../../../../stores/productStore";
import Description from "../../../ui/Description";
import Title from "../../../ui/Title";

const UserCategoryMenu = () => {
  const { category } = useParams();
  const { products, getProductByCategory } = productStore();
  const navigate = useNavigate();

  useEffect(() => {
    getProductByCategory(category as string);
  }, [getProductByCategory, category]);

  const handleNavigation = (id: string) =>
    navigate(`${USER_ROUTES.USER_SHOP}/${id}/cart`);

  return (
    <>
      {products.length > 0 ? (
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
      ) : (
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
      )}
    </>
  );
};

export default UserCategoryMenu;
