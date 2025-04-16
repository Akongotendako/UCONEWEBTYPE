import { useEffect } from "react";
import productStore from "../../stores/productStore";
import EmptyCart from '../../assets/empty-cart.png'
import {
  Box,
  Grid,
  VStack,
  Image,
  RatingGroup,
  HStack,
} from "@chakra-ui/react";
import Title from "../../components/typography/Title";
import Description from "../../components/typography/Description";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import generalToast from "../../components/utils/toaster";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../../routes/admin/adminRoute";

const AdminShopAllAddProduct = () => {
  const { products, getProducts, deleteProduct } = productStore();
  const navigate = useNavigate()

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleDeleteProduct = async (id: string) => {
    const response = await deleteProduct(id);

    if (response.status === 200) {
      generalToast({
        status: response.status,
        message: response.message,
        duration: 3000,
      });
      getProducts();
    }
  };

  const handleNavigation = () => navigate(ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM);

  return (
    <Box w={"full"} h={"full"}>
      {products.length > 0 ? (
        <Grid templateColumns="repeat(4, 1fr)" gap="6">
          {products.map((product) => (
            <VStack
              rounded={"md"}
              borderWidth={"1px"}
              borderColor={"#FFF"}
              p={5}
              align={"flex-start"}
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

              {/** Buttons */}
              <HStack w={"full"} align={"flex-start"}>
                <SecondaryButton width="1/2">Update</SecondaryButton>
                <PrimaryButton
                  width="1/2"
                  onclick={() => handleDeleteProduct(product._id)}
                >
                  Remove
                </PrimaryButton>
              </HStack>
            </VStack>
          ))}
        </Grid>
      ) : (
        <Box  w={"full"} h={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <VStack align={"center"}>
            <Image src={EmptyCart} boxSize={"16"} />
            <Title>No product found</Title>
            <PrimaryButton marginTop="7" onclick={handleNavigation}>Add Product</PrimaryButton>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default AdminShopAllAddProduct;
