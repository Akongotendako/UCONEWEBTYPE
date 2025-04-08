import React from "react";
import Title from "../typography/Title";
import { Input, VStack } from "@chakra-ui/react";

interface InputFieldPros {
  title: string;
  formType: string;
  name: "email" | "password" | "confirmPassword";
  mt?: number
}

const InputField: React.FC<InputFieldPros> = ({ title, formType, name,mt }) => {
  const placeholders = {
    email: "Enter your email",
    password: "Enter your password",
    confirmPassword: "Enter your confirm password",
  };

  return (
    <VStack w={"full"} align={"flex-start"} mt={mt || "10"}>
      <Title textStyle="md">{title}</Title>
      <Input
        name={name}
        variant={"subtle"}
        bg={"#243647"}
        _placeholder={{ color: "#FFFFFF80" }}
        placeholder={placeholders[name]}
        color={'#FFFFFF80'}
      />
    </VStack>
  );
};

export default InputField;
