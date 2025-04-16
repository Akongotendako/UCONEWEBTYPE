import { HStack, VStack } from "@chakra-ui/react";
import Title from "../../components/typography/Title";
import InputField from "../../components/input/InputField";
import productStore from "../../stores/productStore";
import Images from "./Images";

const AdminShopAddUpdateItem = () => {
  const { product, setField } = productStore();
  return (
    <HStack w={"full"} align={"flex-start"} gap={5}>
      {/** General information and stock-pricing*/}
      <VStack gap={5} w={"1/2"}>
        <VStack
          w={"full"}
          borderWidth={"1px"}
          borderColor={"#FFF"}
          p={5}
          rounded={"md"}
          align={"flex-start"}
        >
          {/** General information title */}
          <Title>General Information</Title>

          {/** Product Name */}
          <InputField
            title={"Product name"}
            obj={product}
            field="productName"
            value={product.productName}
            onChange={(value) => setField("productName", value)}
          />

          {/** Description */}
          <InputField
            title={"Description"}
            obj={product}
            field="description"
            value={product.description}
            onChange={(value) => setField("description", value)}
          />
        </VStack>

        {/** Stock and Pricing */}
        <VStack
          w={"full"}
          borderWidth={"1px"}
          borderColor={"#FFF"}
          p={5}
          rounded={"md"}
          align={"flex-start"}
        >
          {/** Stock and pricing title */}
          <Title>Stock and Pricing</Title>

          {/** Price */}
          <InputField
            title={"Price"}
            obj={product}
            field="price"
            value={product.price}
            onChange={(value) => setField("price", value)}
          />

          {/** Stock */}
          <InputField
            title={"Stock"}
            obj={product}
            field="stock"
            value={product.stock}
            onChange={(value) => setField("stock", value)}
          />

          {/** Discount */}
          <InputField
            title={"Discount"}
            obj={product}
            field="discount"
            value={product.discount}
            onChange={(value) => setField("discount", value)}
          />
        </VStack>
      </VStack>

      {/** Upload image and size-categories */}
      <VStack gap={5} w={"1/2"}>
        {/** Upload images */}
        <VStack
          w={"full"}
          p={5}
          align={"flex-start"}
          rounded={"md"}
          borderColor={"#FFF"}
          borderWidth={"1px"}
          gap={10}
        >
          <Title>Upload Images</Title>
          <Images />
        </VStack>

        {/** Sizes and category */}
        <VStack
          w={"full"}
          p={5}
          align={"flex-start"}
          rounded={"md"}
          borderColor={"#FFF"}
          borderWidth={"1px"}
          gap={10}
        >
          <InputField
            title={"Category"}
            obj={product}
            field="category"
            value={product.category}
            onChange={(value) => setField("category", value)}
          ></InputField>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default AdminShopAddUpdateItem;
