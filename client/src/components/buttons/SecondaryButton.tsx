import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface SecondaryButtonProps {
  children?: ReactNode;
  width?: string;
  marginTop?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, width, marginTop }) => {
  return (
    <Button
      size={"sm"}
      w={width || "full"}
      bg={"#121A21"}
      borderColor={'#FFF'}
      _hover={{ bg: "#121A21", borderColor: "#FFF" }}
      mt={marginTop || "5"}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
