import { Box, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdEdit, MdOutlineCloudUpload } from "react-icons/md";
import productStore from "../../../../stores/productStore";
import { IImage } from "../../../../types/product.type";
import generalToast from "../../../utils/toaster";

interface ImagesProps {
  mt?: number;
}

const Images = ({ mt }: ImagesProps) => {
  const { product, addImage, removeImage, updateImage } = productStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const indexRef = useRef<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const image: IImage = { file, url: URL.createObjectURL(file) };

      if (indexRef.current !== null) {
        updateImage(indexRef.current, image);
        indexRef.current = null;
      } else {
        if (product.images.length >= 6) {
          generalToast({
            status: 400,
            message: "You can't add more than 6 images",
            duration: 3000,
          });
          return;
        }

        addImage(image);
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleUpdateClick = (index: number) => {
    indexRef.current = index;
    fileInputRef.current?.click();
  };

  return (
    <Flex gap={5} wrap="wrap" alignItems="center" mt={mt || ""}>
      {/* Display selected images */}
      {product.images.map((image, index) => (
        <Box
          key={index}
          borderColor={"#FFFFFF80"}
          borderWidth={"1px"}
          rounded={"md"}
          position="relative"
          _hover={{
            "& .overlay": { opacity: 1 },
          }}
        >
          <Image
            src={image.url}
            alt={`Selected image ${index + 1}`}
            boxSize="100px"
            objectFit="cover"
            borderRadius="md"
          />
          {/* Overlay for icons, visible on hover */}
          <Box
            className="overlay"
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.500"
            borderRadius="md"
            opacity={0}
            transition="opacity 0.2s"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Icon
              aria-label="Update image"
              as={MdEdit}
              size="sm"
              color={"#FFF"}
              onClick={() => handleUpdateClick(index)}
            />
            <Icon
              aria-label="Remove image"
              as={IoMdClose}
              size="sm"
              color={"#FFF"}
              colorScheme="red"
              onClick={() => removeImage(index)}
            />
          </Box>
        </Box>
      ))}

      {/* Hidden file input for both adding and updating */}
      <Input
        type="file"
        accept="image/*"
        onChange={handleChange}
        display="none"
        ref={fileInputRef}
        id="image-upload"
      />

      {/* Image picker input */}
      <Box
        w="100px"
        h="100px"
        border="2px dashed #ccc"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        cursor="pointer"
      >
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          multiple
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
          onChange={handleChange}
        />

        <Flex direction="column" align="center">
          <MdOutlineCloudUpload fontSize="24px !important" color="#FFF" />
          <Text fontSize="sm" color="gray.500">
            Upload
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Images;
