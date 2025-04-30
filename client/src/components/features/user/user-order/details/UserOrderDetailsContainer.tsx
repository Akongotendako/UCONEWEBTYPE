import { Flex } from "@chakra-ui/react";
import UserOrderDetailsRightContent from "./UserOrderDetailsRightContent";
import UserOrderDetailsLeftContent from "./UserOrderDetailsLeftContent";

const UserOrderDetailsContainer = () => {
  return (
    <Flex w={"full"} direction={"row"} gap={5} align={"flex-start"}>
      {/** Products or items */}
      <UserOrderDetailsLeftContent />
      
      {/** Order details */}
      <UserOrderDetailsRightContent />
    </Flex>
  );
};

export default UserOrderDetailsContainer;
