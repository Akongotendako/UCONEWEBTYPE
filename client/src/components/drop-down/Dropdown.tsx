import { Icon, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import Title from '../typography/Title'

interface DropdownProps< T, K extends keyof T> {
    obj: T,
    field: T,
    value: T[K]
}

const Dropdown = <T, K extends keyof T> ({field, value}: DropdownProps<T, K>) => {
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
      {field === "confirmPassword" ||
        (field === "password" && (
          <Icon
            as={isPasswordVisible ? PiEyeLight : PiEyeSlash}
            position={"absolute"}
            right={5}
            top={"60%"}
            color={"#FFFFFF80"}
            onClick={handlePasswordVisibility}
          />
        ))}
    </VStack>
  )
}

export default Dropdown