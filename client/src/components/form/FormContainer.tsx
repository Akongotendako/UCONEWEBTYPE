import { VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Description from "../ui/Description";
import Title from "../ui/Title";

interface FormContainerProps {
  children?: ReactNode;
}

const FormData: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <VStack
      p={5}
      borderColor={"#FFF"}
      w={"600px"}
      borderWidth={"1px"}
      rounded={"md"}
    >
      <Title textAlign="center">Welcome back</Title>
      <Description textAlign="center">
        See what's new at Uc Merch! Explore our latest arrivals and campus gear.
      </Description>
      {children}
    </VStack>
  );
};

export default FormData;
