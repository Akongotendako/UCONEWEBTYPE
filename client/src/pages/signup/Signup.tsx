import { Checkbox, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AUTH_ROUTE } from "../auth/authRoute";
import generalToast from "../../components/utils/toaster";
import userStore from "../../stores/userStore";
import InputField from "../../components/form/InputField";
import FormContainer from "../../components/form/FormContainer";
import Paragraph from "../../components/ui/Paragraph";
import Logo from "../../components/shared/logo/Logo";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";

const Signup = () => {
  const { user, setField, signUp, clearAllProperties } = userStore();

  const handleSubmission = async () => {
    const response = await signUp();

    generalToast({
      status: response.status,
      message: response.message,
      duration: 3000
    })

    setTimeout(() => {
      if (response.status === 200) {
        clearAllProperties("signup")
      }
    }, 3500);

    
  };
  return (
    <Flex
      w={"full"}
      h={"full"}
      position={"relative"}
      align={"center"}
      justify={"center"}
    >
      <Logo />
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
        <PrimaryButton onclick={handleSubmission}>SIGN UP</PrimaryButton>
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
