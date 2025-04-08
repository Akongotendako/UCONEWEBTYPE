import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TitleProps {
  color?: string;
  textStyle?: string;
  textAlign?: string;
  children?: ReactNode;
  mt?: number;
  mb?: number
}

const Title: React.FC<TitleProps> = ({
  color,
  textStyle,
  children,
  textAlign,
  mt,
  mb
}) => {
  return (
    <Text
      color={color || "#FFF"}
      textStyle={textStyle || "xl"}
      textAlign={textAlign || ""}
      mt={mt}
      mb={mb}
    >
      {children}
    </Text>
  );
};

export default Title;
