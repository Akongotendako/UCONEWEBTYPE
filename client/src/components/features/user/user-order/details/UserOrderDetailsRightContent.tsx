import { For, Grid, GridItem, HStack, Image, VStack } from "@chakra-ui/react";
import Description from "../../../../ui/Description";
import Title from "../../../../ui/Title";
import PrimaryButton from "../../../../ui/PrimaryButton";
import { IProduct } from "../../../../../types/product.type";
import CustomDialog from "../../../../shared/custom-dialog/CustomDialog";
import { useState } from "react";
import reviewStore from "../../../../../stores/reviewStore";

interface UserOrderDetailsRightContentProps {
  products: IProduct[];
}

const UserOrderDetailsRightContent = (
  props: UserOrderDetailsRightContentProps
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addReview } = reviewStore();
  const userId = localStorage.getItem("userId");

  const handleOpenDialog = (product: IProduct) => {
    setIsOpen(!isOpen);
    setProduct(product);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setProduct(null);
  };

  return (
    <VStack
      w={"3/5"}
      rounded={"md"}
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      align={"flex-start"}
      p={5}
      gap={5}
    >
      <For each={props.products}>
        {(product, index) => (
          <Grid templateColumns={"650px 1fr"} w={"full"} key={index}>
            <GridItem>
              <HStack align={"flex-start"} gap={5}>
                <Image
                  src={product.images[0]?.url}
                  boxSize={28}
                  rounded={"sm"}
                />
                <VStack gap={7} align={"flex-start"}>
                  <Description>{product.productName}</Description>
                  <Description>Qty: {product.quantity}</Description>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem>
              <VStack align={"flex-start"}>
                <Title textStyle="md">₱{product.total}</Title>
                <PrimaryButton
                  width="auto"
                  marginTop="2"
                  onclick={() => handleOpenDialog(product)}
                >
                  Write a review
                </PrimaryButton>
              </VStack>
            </GridItem>
          </Grid>
        )}
      </For>

      {isOpen && (
        <CustomDialog
          isOpen={isOpen}
          onClick={handleCloseDialog}
          product={product as IProduct}
          onSubmit={() => addReview(userId as string)}
        />
      )}
    </VStack>
  );
};

export default UserOrderDetailsRightContent;
