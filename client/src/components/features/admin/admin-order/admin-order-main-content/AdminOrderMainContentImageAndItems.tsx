import { HStack, Image } from "@chakra-ui/react";
import Description from "../../../../ui/Description";
import tShirt from "../../../../../assets/t-shirt.jpeg";
import { IOrderProduct } from "../../../../../types/order.type";

interface AdminOrderMainContentImageAndItemsProps {
  products: IOrderProduct[];
}

const AdminOrderMainContentImageAndItems = (
  props: AdminOrderMainContentImageAndItemsProps
) => {
  const text = () => {
    return props.products.length === 1
      ? `${props.products.length} item`
      : `${props.products.length} items`;
  };

  return (
    <HStack gap={7}>
      <Image
        src={props.products[0].images[0]?.url || tShirt}
        boxSize={28}
        rounded={"sm"}
      />
      <Description>{text()}</Description>
    </HStack>
  );
};

export default AdminOrderMainContentImageAndItems;
