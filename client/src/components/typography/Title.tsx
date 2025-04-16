import { SystemStyleObject, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TitleProps {
  color?: string;
  textStyle?: string;
  textAlign?: string;
  children?: ReactNode;
  mt?: number;
  mb?: number;
  isCursorActivated?: boolean;
  _hover?: SystemStyleObject
}

const Title: React.FC<TitleProps> = ({
  color,
  textStyle,
  children,
  textAlign,
  mt,
  mb,
  isCursorActivated = false,
  _hover
}) => {
  return (
    <Text
      color={color || "#FFF"}
      textStyle={textStyle || "xl"}
      textAlign={textAlign || ""}
      mt={mt}
      mb={mb}
      cursor={isCursorActivated ? "pointer" : "auto"}
      _hover={_hover}
    >
      {children}
    </Text>
  );
};

export default Title;
