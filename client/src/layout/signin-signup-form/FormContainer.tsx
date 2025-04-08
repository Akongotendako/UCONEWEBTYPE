import { VStack } from "@chakra-ui/react";
import React from "react";
import Title from "../../components/typography/Title";
import Description from "../../components/typography/Description";

interface FormContainerProps {
  title?: string;
  description?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({
  title,
  description,
}) => {
  return (
    <VStack p={5}>
      <Title textAlign="center">{title}</Title>
      <Description>{description}</Description>
    </VStack>
  );
};

export default FormContainer;
