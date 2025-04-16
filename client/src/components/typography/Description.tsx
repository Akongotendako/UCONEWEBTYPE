import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface DescriptionProps {
  color?: string;
  textStyle?: string;
  children?: ReactNode;
  textAlign?: string;
  lineClamp?: number
}

const Description: React.FC<DescriptionProps> = ({
  color,
  textStyle,
  children,
  textAlign,
  lineClamp
}) => {
  return (
    <Text lineClamp={lineClamp || ""} color={color || "#FFFFFF80"} textStyle={textStyle || "md"} textAlign={textAlign || "start"}>
      {children}
    </Text>
  );
};

export default Description;
