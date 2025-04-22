import { HStack } from "@chakra-ui/react";
import ImagesMenu from "./ImagesMenu";
import ImageCart from "./ImageCart";
import RightContainer from "./RightContainer";
import DescriptionAndCustomerReview from "./DescriptionAndCustomerReview";
import { IProduct } from "../../types/product.type";

interface AddToCartContainerProps {
    product: IProduct
}

const AddToCartContainer = ({product}: AddToCartContainerProps) => {

    
  return (
    <>
      <HStack
        h={"500px"}
        w={"full"}
        align={"flex-start"}
        p={5}
        overflow={"hidden"}
        borderWidth={"1px"}
        borderColor={"#FFFFFF80"}
        rounded={"md"}
      >
        <HStack w={"1/2"} align={"flex-start"}  h={"full"}>
          <ImagesMenu />
          <ImageCart />
        </HStack>
        <RightContainer />
      </HStack>

      {/** Description and customer review */}
      <DescriptionAndCustomerReview/>
    </>
  );
};

export default AddToCartContainer;
