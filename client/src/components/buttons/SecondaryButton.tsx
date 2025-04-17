import { Button } from "@chakra-ui/react";
import React, { MouseEventHandler, ReactNode } from "react";

interface SecondaryButtonProps {
  children?: ReactNode;
  width?: string;
  marginTop?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, width, marginTop, onClick }) => {
  return (
    <Button
      size={"sm"}
      w={width || "full"}
      bg={"#121A21"}
      borderColor={'#FFF'}
      _hover={{ bg: "#121A21", borderColor: "#FFF" }}
      mt={marginTop || "5"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
