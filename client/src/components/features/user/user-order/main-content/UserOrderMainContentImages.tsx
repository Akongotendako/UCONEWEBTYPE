import { HStack, Image } from "@chakra-ui/react";
import Description from "../../../../ui/Description";
import shirt from "../../../../../assets/t-shirt.jpeg";
import { IOrderProduct } from "../../../../../types/order.type";

interface UserOrderMainContentImagesProps {
  products: IOrderProduct[];
}

const UserOrderMainContentImages = (props: UserOrderMainContentImagesProps) => {
  

  const text = () => {
    return props.products.length === 1
      ? `${props.products.length} item`
      : `${props.products.length} items`;
  };
  
  return (
    <HStack gap={7}>
      <Image src={props.products[0]?.images[0]?.url || shirt} boxSize={28} />
      <Description>{text()}</Description>
    </HStack>
  );
};

export default UserOrderMainContentImages;
