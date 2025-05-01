import { VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../../../../routes/user/userRoute";
import cartStore from "../../../../../stores/cartStore";
import generalToast from "../../../../utils/toaster";

const UserCartPaymentContainer = () => {
  const userId = localStorage.getItem("userId");
  const { addOrder, deleAllCarts } = cartStore();
  const navigate = useNavigate();

  const handleSubmission = async (
    paymentMethod: "CASH" | "GCASH",
    paymentStatus: "Pending" | "Paid"
  ) => {
    const response = await addOrder(paymentMethod, paymentStatus);

    await deleAllCarts(userId as string);

    generalToast({
      status: response.status,
      message: response.message,
      duration: 5000,
    });

    setTimeout(() => {
      navigate(`${USER_ROUTES.USER}/${USER_ROUTES.USER_ORDER}`);
    }, 6000);
  };

  return (
    <VStack
      w={"full"}
      justify={"center"}
      align={"center"}
      gap={5}
      mt={"3.125rem"}
    >
      <HStack
        w={40}
        h={40}
        rounded={"md"}
        borderColor={"#FFFFFF80"}
        p={5}
        borderWidth={"1px"}
        justify={"center"}
        color={"#FFFFFF80"}
        transition={"all 0.3s ease"}
        _hover={{ bg: "#2985E5", color: "#FFF", border: "none" }}
        onClick={() => handleSubmission("CASH", "Pending")}
      >
        CASH
      </HStack>
      <HStack
        w={40}
        h={40}
        rounded={"md"}
        borderColor={"#FFFFFF80"}
        p={5}
        borderWidth={"1px"}
        justify={"center"}
        color={"#FFFFFF80"}
        transition={"all 0.3s ease"}
        _hover={{ bg: "#2985E5", color: "#FFF", border: "none" }}
        onClick={() => handleSubmission("GCASH", "Paid")}
      >
        GCASH
      </HStack>
    </VStack>
  );
};

export default UserCartPaymentContainer;
