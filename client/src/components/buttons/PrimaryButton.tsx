import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children?: ReactNode;
  width?: string;
  marginTop?: string;
  onclick?: () => void;
  flex?: number;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  width,
  marginTop,
  onclick,
  flex,
}) => {
  return (
    <Button
      size={"sm"}
      w={width || "full"}
      bg={"#2985E5"}
      _hover={{ bg: "#121A21", borderColor: "#FFF" }}
      mt={marginTop || "5"}
      onClick={onclick}
      flex={flex}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
