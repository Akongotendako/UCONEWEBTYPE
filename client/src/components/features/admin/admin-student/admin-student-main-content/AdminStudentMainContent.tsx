import { Flex, For, HStack } from "@chakra-ui/react";
import userStore from "../../../../../stores/userStore";

const AdminStudentMainContent = () => {
  const { users } = userStore();
  return (
    <Flex w={"full"} direction={"column"} gap={5}>
      <For each={users}>
        {(user, index) => (
          <HStack
            p={5}
            rounded={"md"}
            borderColor={"#FFFFFF80"}
            borderWidth={"1px"}
          >

            
          </HStack>
        )}
      </For>
    </Flex>
  );
};

export default AdminStudentMainContent;
