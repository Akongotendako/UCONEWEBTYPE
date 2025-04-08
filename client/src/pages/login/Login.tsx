import { Checkbox, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import LogoContainer from "../../components/logo/LogoContainer";
import FormContainer from "../../layout/signin-signup-form/FormContainer";
import InputField from "../../components/input/InputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { FcGoogle } from "react-icons/fc";
import Paragraph from "../../components/typography/Paragraph";

const Login = () => {
  return (
    <Flex
      w={"full"}
      h={"full"}
      position={"relative"}
      align={"center"}
      justify={"center"}
    >
      <LogoContainer />
      <FormContainer>
        <VStack gap={7} w={"full"}>
          <InputField title={"Email"} formType={"signin"} name={"email"} mt={7}/>
          <InputField
          mt={1}
            title={"Password"}
            formType={"signin"}
            name={"password"}
          />
        </VStack>
        <HStack w={"full"} justify={"space-between"} mt={3}>
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label color={"#FFFFFF80"}>Remember me</Checkbox.Label>
          </Checkbox.Root>
          <Link href="#" color={"#94ADC7"}>
            Forgot password?
          </Link>
        </HStack>
        <PrimaryButton>SIGN IN</PrimaryButton>
        <SecondaryButton marginTop="2">
          <FcGoogle />
          SIGN IN WITH GOOGLE
        </SecondaryButton>
        <HStack w={"full"} mt={2}>
          <Paragraph>Don't you have an account yet?</Paragraph>
          <Link href="#" color={"#94ADC7"}>
            Sign up
          </Link>
        </HStack>
      </FormContainer>
    </Flex>
  );
};

export default Login;
