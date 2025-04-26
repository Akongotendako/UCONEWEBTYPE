import { Flex } from "@chakra-ui/react";
import UserProfileContainer from "../../../components/features/user/user-profile/profile/UserProfileContainer";
import UserProfilePersonalInformationContainer from "../../../components/features/user/user-profile/personal-information/UserProfilePersonalInformationContainer";
import { useEffect } from "react";
import userStore from "../../../stores/userStore";

const UserProfile = () => {
  const { fetchProfile } = userStore();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchProfile(userId as string);
  }, [userId, fetchProfile]);

  return (
    <Flex w={"full"} p={5} direction={"row"} gap={5} align={"flex-start"}>
      <UserProfileContainer />
      <UserProfilePersonalInformationContainer />
    </Flex>
  );
};

export default UserProfile;
