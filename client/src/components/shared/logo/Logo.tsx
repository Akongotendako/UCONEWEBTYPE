import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import UCMerchLogo from "../../../assets/shopping-cart.png";
import Title from "../../ui/Title";

interface LogoProps {
  isVisible?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isVisible = false }) => {
  return (
    <Flex
      direction={"row"}
      gap={2}
      position={isVisible ? "" : "absolute"}
      top={5}
      left={5}
      align={"center"}
    >
      <Image src={UCMerchLogo} fit={"cover"} boxSize={"50px"} />
      <Title>UC Merch</Title>
    </Flex>
  );
};

export default Logo;
