import { Box, Image } from "@chakra-ui/react";

interface UserCartProductImageProps {
  source: string;
}

const UserCartProductImage = ({ source }: UserCartProductImageProps) => {
  return (
    <Box w={"1/2"}>
      <Image src={source} rounded={"md"} boxSize={60} />
    </Box>
  );
};

export default UserCartProductImage;
