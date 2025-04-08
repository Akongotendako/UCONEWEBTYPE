import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface DescriptionProps {
  color?: string;
  textStyle?: string;
  children?: ReactNode;
}

const Description: React.FC<DescriptionProps> = ({
  color,
  textStyle,
  children,
}) => {
  return (
    <Text color={color || "#FFFFFF80"} textStyle={textStyle || "xl"}>
      {children}
    </Text>
  );
};

export default Description;
