import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface ParagraphProps {
  color?: string;
  textStyle?: string;
  textAlign?: string;
  children?: ReactNode;
  mt?: number;
  mb?: number;
  bg?: string
}

const Paragraph: React.FC<ParagraphProps> = ({
  color,
  textStyle,
  children,
  textAlign,
  mt,
  mb,
  bg
}) => {
  return (
    <Text
      color={color || "#FFFFFF80"}
      textStyle={textStyle || "md"}
      textAlign={textAlign || ""}
      mt={mt}
      mb={mb}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
