import { Box, Flex } from "@chakra-ui/react";
import productStore from "../../stores/productStore";

const SelectionBoxes = () => {

    const {product, addSize} = productStore();
  const sizes = [
    {
      id: 1,
      label: "Small",
    },
    {
      id: 2,
      label: "Medium",
    },
    {
      id: 3,
      label: "Large",
    },
    {
      id: 4,
      label: "Extra Large",
    },
  ];
  return (
    <Flex wrap={"wrap"} gap={5} w={"full"}>
      {sizes.map((size) => (
        <Box
          key={size.id}
          rounded={"md"}
          borderWidth={"1px"}
          borderColor={product.sizes.includes(size.label) ? "#243647" : "#FFF"}
          h={"32"}
          w={"32"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={product.sizes.includes(size.label) ? "#243647" : "#121A21"}
          color={"#FFFFFF80"}
          onClick={() =>  addSize(size.label)}
        >
          {size.label}
        </Box>
      ))}
    </Flex>
  );
};

export default SelectionBoxes;
