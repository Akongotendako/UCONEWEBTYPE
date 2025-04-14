import React, { useState } from "react";
import Title from "../typography/Title";
import { Icon, Input, VStack } from "@chakra-ui/react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getInputType = (field: string): "text" | "email" | "password" => {
    if (field === "email") return "email";
    if (field === "password" || field === "confirmPassword") return "password";
    return "text";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue as T[K]);
  };

  const inputType =
    field === "password" || field === "confirmPassword"
      ? isPasswordVisible
        ? "text"
        : "password"
      : getInputType(field as string);

  const placeholders = {
    email: "Enter your email",
    password: "Enter your password",
    confirmPassword: "Enter your confirm password",
  } as Partial<Record<K | "email" | "password" | "confirmPassword", string>>;

  const positionType =
    field === "password"
      ? "relative"
      : field === "confirmPassword"
      ? "relative"
      : "";

  const handlePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <VStack
      w={"full"}
      align={"flex-start"}
      mt={mt || "10"}
      position={positionType}
    >
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
      {field !== "email" && (
        <Icon
          as={isPasswordVisible ? PiEyeLight : PiEyeSlash}
          position={"absolute"}
          right={5}
          top={"60%"}
          color={"#FFFFFF80"}
          onClick={handlePasswordVisibility}
        />
      )}
    </VStack>
  );
};

export default InputField;
