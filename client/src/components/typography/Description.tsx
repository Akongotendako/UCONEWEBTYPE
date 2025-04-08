import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface DescriptionProps {
  color?: string;
  textStyle?: string;
  children?: ReactNode;
  textAlign?: string;
}

const Description: React.FC<DescriptionProps> = ({
  color,
  textStyle,
  children,
  textAlign
}) => {
  return (
    <Text color={color || "#FFFFFF80"} textStyle={textStyle || "md"} textAlign={textAlign || "start"}>
      {children}
    </Text>
  );
};

export default Description;
