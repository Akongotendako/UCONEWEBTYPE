import React from "react";
import Title from "../typography/Title";
import { Input, VStack } from "@chakra-ui/react";

interface InputFieldProps<T, K extends keyof T> {
  mt?: number;
  title: string;
  obj: T;
  field: K;
  value: T[K];
  onChange: (value: T[K]) => void;
}

const InputField = <T, K extends keyof T>({
  mt,
  title,
  obj,
  field,
  value,
  onChange,
}: InputFieldProps<T, K>) => {
  const getInputType = (field: string): "text" | "email" | "password" => {
    if (field === "email") return "email";
    if (field === "password" || field === "confirmPassword") return "password";
    return "text";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue as T[K]);
  };

  const inputType = getInputType(field as string);

  const placeholders = {
    email: "Enter your email",
    password: "Enter your password",
    confirmPassword: "Enter your confirm password",
  } as Partial<Record<K | "email" | "password" | "confirmPassword", string>>;

  return (
    <VStack w={"full"} align={"flex-start"} mt={mt || "10"}>
      <Title textStyle="md">{title}</Title>
      <Input
        type={inputType}
        variant={"subtle"}
        bg={"#243647"}
        _placeholder={{ color: "#FFFFFF80" }}
        placeholder={placeholders[field]}
        color={"#FFFFFF80"}
        onChange={handleChange}
        value={String(value)}
      />
    </VStack>
  );
};

export default InputField;
