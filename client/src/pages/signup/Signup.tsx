import { Checkbox, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import LogoContainer from "../../components/logo/LogoContainer";
import FormContainer from "../../layout/signin-signup-form/FormContainer";
import InputField from "../../components/input/InputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { FcGoogle } from "react-icons/fc";
import Paragraph from "../../components/typography/Paragraph";
import { AUTH_ROUTE } from "../auth/authRoute";
import userStore from "../../stores/userStore";

const Signup = () => {
  const { user, setField, signUp } = userStore();
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
          <InputField
            obj={user.signup}
            field="email"
            value={user.signup.email}
            mt={7}
            title={"Email"}
            onChange={(value) => setField("signup", "email", value)}
          />
          <InputField
            title={"Password"}
            obj={user.signup}
            field="password"
            mt={1}
            value={user.signup.password}
            onChange={(value) => setField("signup", "password", value)}
          />
          <InputField
            title={"Confirm Password"}
            obj={user.signup}
            field="password"
            mt={1}
            value={user.signup.confirmPassword}
            onChange={(value) => setField("signup", "confirmPassword", value)}
          />
        </VStack>
        <Checkbox.Root w={"full"} mt={3}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label color={"#FFFFFF80"}>
            Agree with terms and Conditions
          </Checkbox.Label>
        </Checkbox.Root>
        <PrimaryButton onclick={() => signUp()}>SIGN UP</PrimaryButton>
        <SecondaryButton marginTop="2">
          <FcGoogle />
          SIGN IN WITH GOOGLE
        </SecondaryButton>
        <HStack w={"full"} mt={2}>
          <Paragraph>Already have an account?</Paragraph>
          <Link href={AUTH_ROUTE.LOGIN} color={"#94ADC7"}>
            Sign in
          </Link>
        </HStack>
      </FormContainer>
    </Flex>
  );
};

export default Signup;
