import { Checkbox, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import LogoContainer from "../../components/logo/LogoContainer";
import FormContainer from "../../layout/signin-signup-form/FormContainer";
import InputField from "../../components/input/InputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { FcGoogle } from "react-icons/fc";
import Paragraph from "../../components/typography/Paragraph";
import { AUTH_ROUTE } from "../auth/authRoute";
import userStore from "../../types/stores/userStore";
import generalToast from "../../components/utils/toaster";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../../routes/admin/adminRoute";

const Login = () => {

  const {user, setField, signIn, clearAllProperties} = userStore();
  const navigate = useNavigate()

  const handleSubmission = async() => {

    const response = await signIn()

    generalToast({
      status: response.status,
      message: response.message,
      duration: 3000
    });

    setTimeout(() => {
      if (response.status === 200) {
        clearAllProperties("signin")
      }
    }, 3500);

    setTimeout(() => {
      navigate(ADMIN_ROUTE.ADMIN)
    }, 3600);
  }

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
            mt={7}
            title={"Email"}
            obj={user.signin}
            field="email"
            value={user.signin.email}
            onChange={(value) => setField("signin", "email", value)}
          />
          <InputField
             mt={1}
             title={"Password"}
             obj={user.signin}
             field="password"
             value={user.signin.password}
             onChange={(value) => setField("signin", "password", value)}
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
        <PrimaryButton onclick={handleSubmission}>SIGN IN</PrimaryButton>
        <SecondaryButton marginTop="2">
          <FcGoogle />
          SIGN IN WITH GOOGLE
        </SecondaryButton>
        <HStack w={"full"} mt={2}>
          <Paragraph>Don't you have an account yet?</Paragraph>
          <Link href={AUTH_ROUTE.SIGNUP} color={"#94ADC7"}>
            Sign up
          </Link>
        </HStack>
      </FormContainer>
    </Flex>
  );
};

export default Login;
