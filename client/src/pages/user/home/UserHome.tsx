import { Box, Grid, HStack, Image, RatingGroup, VStack } from "@chakra-ui/react";
import TShirt from "../../../assets/t-shirt.jpeg";
import Lanyard from "../../../assets/sling.jpg";
import Uniform from "../../../assets/blouse.jpg";
import { useEffect } from "react";
import productStore from "../../../stores/productStore";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../routes/user/userRoute";
import Description from "../../../components/ui/Description";
import Title from "../../../components/ui/Title";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const UserHome = () => {
  const { products, getProducts } = productStore();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const categories = [
    {
      id: 0,
      title: "Lanyard",
      stock: "200",
      src: Lanyard,
    },
    {
      id: 1,
      title: "Uniform",
      stock: "200",
      src: Uniform,
    },
    {
      id: 2,
      title: "T-Shirt",
      stock: "200",
      src: TShirt,
    },
  ];

  const handleNavigationToShopAll = () => navigate(`${USER_ROUTES.USER_SHOP}`)

  return (
    <VStack w={"full"} p={5} align={"flex-start"} gap={10}>
      {/** Hero section */}
      <HStack
        gap={20}
        rounded={"md"}
        borderColor={"#FFF"}
        borderWidth={"1px"}
        p={5}
      >
        <VStack align={"flex-start"}>
          <Title>UC Merch</Title>
          <Description>
            Skip the long walks and social media searches! Discover the latest
            products for students, order online, and pick up at your department
            hassle-free.
          </Description>
          <PrimaryButton width="50%" onclick={handleNavigationToShopAll}>SHOP NOW</PrimaryButton>
        </VStack>
        <Image src={TShirt} w={"4/5"} h={96} fit={"cover"} rounded={"sm"} />
      </HStack>

      {/** Category */}
      <VStack align={"flex-start"} gap={5} w={"full"}>
        <Title>Categories</Title>
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          {categories.map((category) => (
            <VStack
              rounded={"md"}
              borderColor={"#FFF"}
              p={5}
              borderWidth={"1px"}
              key={category.id}
              align={"flex-start"}
            >
              <Image src={category.src} h={40} w={"full"} rounded={"sm"} />
              <Title>{category.title}</Title>
              <Description>{`${category.stock} products`}</Description>
              <PrimaryButton>Shop Now</PrimaryButton>
            </VStack>
          ))}
        </Grid>
      </VStack>

      {/** Top sellers */}
      <VStack w={"full"} align={"flex-start"} gap={5}>
        <Title>Top Sellers</Title>
        <Grid templateColumns="repeat(4, 1fr)" gap="6">
          {products.map((product) => (
            <VStack
              rounded={"md"}
              borderWidth={"1px"}
              borderColor={"#FFF"}
              p={5}
              align={"flex-start"}
              key={product._id}
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
      </VStack>
    </VStack>
  );
};

export default UserHome;
