import { Box, Grid, HStack, RatingGroup, VStack, Image } from "@chakra-ui/react";
import Description from "../../../components/typography/Description";
import Title from "../../../components/typography/Title";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const UserShopAll = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
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

        {/** Buttons */}
        <HStack w={"full"} align={"flex-start"}>
          <SecondaryButton
            width="1/2"
            onClick={() => handleNavigationTOUpdateItemPage(product._id)}
          >
            Update
          </SecondaryButton>
          <PrimaryButton
            width="1/2"
            onclick={() => handleDeleteProduct(product._id)}
          >
            Remove
          </PrimaryButton>
        </HStack>
      </VStack>
    </Grid>
  )
}

export default UserShopAll