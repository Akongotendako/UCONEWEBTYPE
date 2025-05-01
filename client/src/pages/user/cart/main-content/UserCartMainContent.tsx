import { Flex } from "@chakra-ui/react";
import UserCartMainContentContainer from "../../../../components/features/user/user-cart/main-content/UserCartMainContentContainer";
import cartStore from "../../../../stores/cartStore";
import { useEffect } from "react";

const UsercartMainContent = () => {

  const userId = localStorage.getItem("userId");
  const {fetchCart} = cartStore();

  useEffect(() => {
    fetchCart(userId as string)
  }, [userId, fetchCart])
  

  return (
    <Flex w={"full"} direction={"column"}>
      <UserCartMainContentContainer/>
    </Flex>
  );
};

export default UsercartMainContent;
