import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ParagraphProps {
  color?: string;
  textStyle?: string;
  children?: ReactNode;
  textAlign?: string;
  lineClamp?: number;
  fontStyle?: string;
  mb?: number
}

const Paragraph: React.FC<ParagraphProps> = ({
  color,
  textStyle,
  children,
  textAlign,
  lineClamp,
  fontStyle,
  mb
}) => {
  return (
    <Text
      lineClamp={lineClamp || ""}
      color={color || "#FFFFFF80"}
      textStyle={textStyle || "md"}
      textAlign={textAlign || "start"}
      fontStyle={fontStyle || ""}
      mb={mb || ""}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
