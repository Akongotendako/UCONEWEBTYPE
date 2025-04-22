import { Box, Center, Icon, Image, VStack } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import productStore from "../../stores/productStore";

const ImagesMenu = () => {

  const {product, nextImage, prevImage, setIndex} = productStore()

  return (
    <VStack w={36} h={"full"} position={"relative"}>
      <Center>
        <Icon as={IoIosArrowUp} size={"md"} color={"#FFFFFF80"} onClick={prevImage}/>
      </Center>
      <Box
        flex="1"
        overflow="hidden"
        maxH="calc(100% - 60px)" // Reserve space for both arrows
        w="full"
      >
        <VStack gap={2} py={1}>
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              objectFit={"cover"}
              boxSize={"100px"}
              onClick={() => setIndex(index)}
            />
          ))}
        </VStack>
      </Box>
      <Center>
        <Icon
          as={IoIosArrowDown}
          size={"md"}
          color={"#FFFFFF80"}
          position={"absolute"}
          bottom={0}
          onClick={nextImage}
        />
      </Center>
    </VStack>
  );
};

export default ImagesMenu;
