import { Flex, For, Grid, GridItem } from "@chakra-ui/react";
import userStore from "../../../../../stores/userStore";
import StudentImageName from "./StudentImageName";
import Email from "./Email";
import EditDeleteButtons from "./EditDeleteButtons";

const AdminStudentMainContent = () => {
  const { users } = userStore();
  return (
    <Flex w={"full"} direction={"column"} gap={5}>
      <For each={users}>
        {(user, index) => (
          <Grid
            w={"full"}
            templateColumns="repeat(3, 1fr)"
            gap={4}
            rounded={"md"}
            borderColor={"#FFFFFF80"}
            borderWidth={"1px"}
            p={5}
            key={index}
            alignItems={"center"}
          >
            {/** Images */}
            <GridItem>
              <StudentImageName
                url={user.profile.profilePic.url}
                firstName={user.profile.firstName}
                lastName={user.profile.lastName}
                index={index}
              />
            </GridItem>

            {/** Email */}
            <GridItem justifySelf={"center"}>
              <Email email={user.email} />
            </GridItem>

            {/** Delete edit buttons */}
            <GridItem justifySelf={"flex-end"}>
              <EditDeleteButtons />
            </GridItem>
          </Grid>
        )}
      </For>
    </Flex>
  );
};

export default AdminStudentMainContent;
