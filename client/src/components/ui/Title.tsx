import { SystemStyleObject, Text } from "@chakra-ui/react";
import React, { MouseEventHandler, ReactNode } from "react";

interface TitleProps {
  color?: string;
  textStyle?: string;
  textAlign?: string;
  children?: ReactNode;
  mt?: number;
  mb?: number;
  isCursorActivated?: boolean;
  _hover?: SystemStyleObject;
  onclick?: MouseEventHandler<HTMLParagraphElement>;
  lineClamp?: number
  underline?: string
}

const Title: React.FC<TitleProps> = ({
  color,
  textStyle,
  children,
  textAlign,
  mt,
  mb,
  isCursorActivated = false,
  _hover,
  onclick,
  lineClamp,
  underline
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
      onClick={onclick}
      lineClamp={lineClamp || ""}
      textDecoration={underline || ""}
    >
      {children}
      
    </Text>
  );
};

export default Title;
