import { Button } from "@chakra-ui/react";
import React, { MouseEventHandler, ReactNode } from "react";

interface SecondaryButtonProps {
  children?: ReactNode;
  width?: string;
  marginTop?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  flex?: number;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  width,
  marginTop,
  onClick,
  flex,
}) => {
  return (
    <Button
      size={"sm"}
      w={width || "full"}
      bg={"#121A21"}
      borderColor={"#FFF"}
      _hover={{ bg: "#2985E5", borderColor: "transparent" }}
      mt={marginTop || "5"}
      onClick={onClick}
      flex={flex}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
