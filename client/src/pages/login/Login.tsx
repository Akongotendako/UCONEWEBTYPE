import { Checkbox, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AUTH_ROUTE } from "../auth/authRoute";
import generalToast from "../../components/utils/toaster";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/userStore";
import { ADMIN_ROUTE } from "../../routes/admin/adminRoute";
import { USER_ROUTES } from "../../routes/user/userRoute";
import InputField from "../../components/form/InputField";
import FormContainer from "../../components/form/FormContainer";
import Paragraph from "../../components/ui/Paragraph";
import Logo from "../../components/shared/logo/Logo";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";

const Login = () => {
  const { user, setField, signIn, clearAllProperties } = userStore();
  const navigate = useNavigate();

  const handleSubmission = async () => {
    const response = await signIn();

    if (!response.success) {
      generalToast({
        status: response.status,
        message: response.message,
        duration: 3000,
      });
      return;
    }

    generalToast({
      status: response.status,
      message: response.message,
      duration: 3000,
    });

    setTimeout(() => {
      if (response.status === 200) {
        clearAllProperties("signin");
      }
    }, 3500);

    setTimeout(() => {
      if (response.role === "admin") {
        navigate(ADMIN_ROUTE.ADMIN);
        localStorage.setItem("role", "admin");
        localStorage.setItem("userId", response.userId);
      } else {
        navigate(USER_ROUTES.USER);
        localStorage.setItem("role", "user");
        localStorage.setItem("userId", response.userId);
      }
    }, 3600);
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
