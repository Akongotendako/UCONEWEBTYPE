import { VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../../../routes/user/userRoute";
import cartStore from "../../../../../stores/cartStore";
import PrimaryButton from "../../../../ui/PrimaryButton";
import Title from "../../../../ui/Title";

const UserMainContentCheckOut = () => {
  const { cart } = cartStore();
  const navigate = useNavigate();

  const handleNavigationToCheckOut = () => {
    navigate(USER_ROUTES.USER_CHECKOUT);
  };
  return (
    <VStack align={"flex-end"} w={"full"} mt={5}>
      <VStack
        borderColor={"#FFFFFF80"}
        borderWidth={"1px"}
        w={"1/2"}
        align={"flex-start"}
        p={5}
        rounded={"md"}
      >
        <HStack gap={60} align={"flex-start"}>
          <Title>Total:</Title>
          <Title color="#FFFFFF80">{cart.total}</Title>
        </HStack>

        <PrimaryButton onclick={handleNavigationToCheckOut}>
          CHECK OUT
        </PrimaryButton>
      </VStack>
    </VStack>
  );
};

export default UserMainContentCheckOut;
