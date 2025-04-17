import { HStack, VStack } from "@chakra-ui/react";
import Title from "../../components/typography/Title";
import InputField from "../../components/input/InputField";
import productStore from "../../stores/productStore";
import Images from "./Images";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SelectionBoxes from "../../components/selection-boxes/SelectionBoxes";
import generalToast from "../../components/utils/toaster";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const AdminShopAddUpdateItem = () => {
  const { id } = useParams();
  const {
    product,
    setField,
    addProduct,
    clearAllProperties,
    isCategoryLanyard,
    getProduct,
    updateProduct,
  } = productStore();
  const isUpdate = !!id;
  const buttonText = isUpdate ? "Save Changes" : "Save";

  useEffect(() => {
    if (id) {
      getProduct(id);
      console.log("EXECUTED");
    }
  }, [getProduct, id]);

  const handleChange = async () => {
    if (id) {
      const response = await updateProduct(id);

      if (response.status === 200) {
        generalToast({
          status: response.status,
          message: response.message,
          duration: 3000,
        });
        clearAllProperties();
      } else {
        generalToast({
          status: response.status,
          message: response.message,
          duration: 3000,
        });
      }
    } else {
      const response = await addProduct();

      if (response.status === 200) {
        generalToast({
          status: response.status,
          message: response.message,
          duration: 3000,
        });
        clearAllProperties();
      } else {
        generalToast({
          status: response.status,
          message: response.message,
          duration: 3000,
        });
      }
    }
  };

  const handleLanyardCategory = (category: string) => {
    if (category === "Lanyard") {
      isCategoryLanyard();
    }
  };
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
            mt={4}
          />

          {/** Description */}
          <InputField
            title={"Description"}
            obj={product}
            field="description"
            value={product.description}
            onChange={(value) => setField("description", value)}
            mt={6}
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
            mt={4}
          />

          {/** Stock */}
          <InputField
            title={"Stock"}
            obj={product}
            field="stock"
            value={product.stock}
            onChange={(value) => setField("stock", value)}
            mt={6}
          />

          {/** Discount */}
          <InputField
            title={"Discount"}
            obj={product}
            field="discount"
            value={product.discount}
            onChange={(value) => setField("discount", value)}
            mt={6}
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
          {/** Sizes and category title */}
          <Title>Sizes and Category</Title>

          {/** Sizes title */}
          {product.category !== "Lanyard" && (
            <VStack align={"flex-start"}>
              <Title textStyle="md">Sizes</Title>
              <SelectionBoxes />
            </VStack>
          )}

          <InputField
            title={"Category"}
            obj={product}
            field="category"
            value={product.category}
            onChange={(value) => {
              setField("category", value);
              handleLanyardCategory(value);
            }}
            mt={4}
          />

          {/** Save and changes button */}
          <PrimaryButton marginTop="1" onclick={handleChange}>
            {buttonText}
          </PrimaryButton>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default AdminShopAddUpdateItem;
