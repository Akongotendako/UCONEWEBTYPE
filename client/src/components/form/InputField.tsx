import React, { useState } from "react";
import { Icon, Input, VStack } from "@chakra-ui/react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IconType } from "react-icons";
import Title from "../ui/Title";

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
  field,
  value,
  onChange,
}: InputFieldProps<T, K>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDropdownActivated, setIsDropdownActivated] = useState(false);

  const showIcon = ["password", "confirmPassword", "category"].includes(
    field as string
  );
  const iconType: IconType =
    field === "category"
      ? RiArrowDropDownLine
      : isPasswordVisible
      ? PiEyeLight
      : PiEyeSlash;

  const dropDownValues = [
    {
      id: 1,
      label: "Apparel",
    },
    {
      id: 2,
      label: "Accessories",
    },
    {
      id: 3,
      label: "Academic Materials",
    },
  ];

  const getInputType = (field: string): "text" | "email" | "password" => {
    if (field === "email") return "email";
    if (field === "password" || field === "confirmPassword") return "password";
    return "text";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue as T[K]);
  };

  const handleDropdownValue = (value: string) => {
    onChange(value as T[K]);
  };

  const inputType =
    field === "password" || field === "confirmPassword"
      ? isPasswordVisible
        ? "text"
        : "password"
      : getInputType(field as string);

  const disableField: boolean = field === "category" ? true : false;

  const placeholders = {
    email: "Enter your email",
    password: "Enter your password",
    confirmPassword: "Enter your confirm password",
    productName: "Enter the product name",
    description: "Enter the description of the product",
    price: "Enter the price",
    stock: "Enter the available items",
    discount: "Enter the discount (optional)",
    category: "Choose category",
    firstName: "Enter your first name",
    lastName: "Enter your last name",
    phoneNumber: "Enter your phone number",
    age: "Enter your age"
  } as Partial<
    Record<
      | K
      | "email"
      | "password"
      | "confirmPassword"
      | "productName"
      | "description"
      | "price"
      | "stock"
      | "discount"
      | "category"
      | "firstName"
      | "lastName"
      | "phoneNumber"
      | "age",
      string
    >
  >;

  const positionType =
    field === "password"
      ? "relative"
      : field === "confirmPassword"
      ? "relative"
      : field === "category"
      ? "relative"
      : "";

  const handlePasswordVisibility = () => {
    if (field === "category") {
      setIsDropdownActivated(!isDropdownActivated);
    } else {
      setIsPasswordVisible(!isPasswordVisible);
    }
  };



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
        disabled={disableField}
      />
      {showIcon && (
        <Icon
          as={iconType}
          position={"absolute"}
          right={5}
          top={"60%"}
          color={"#FFFFFF80"}
          onClick={handlePasswordVisibility}
        />
      )}
      {field === "category" && (
        <VStack
          position={"absolute"}
          top={"80px"}
          bg={"#243647"}
          w={"full"}
          align={"flex-start"}
          p={5}
          rounded={"md"}
          zIndex={"dropdown"}
          display={isDropdownActivated ? "block" : "none"}
        >
          {dropDownValues.map((item) => (
            <Title
              textStyle="md"
              isCursorActivated={true}
              color="#FFFFFF80"
              mb={3}
              _hover={{ color: "#94ADC7" }}
              key={item.id}
              onclick={() => {
                handleDropdownValue(item.label)
                handlePasswordVisibility()
              }}
            >
              {item.label}
            </Title>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default InputField;
