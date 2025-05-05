import { Flex } from "@chakra-ui/react";
import UserProfilePersonalInformationContainer from "../../../components/features/user/user-profile/personal-information/UserProfilePersonalInformationContainer";
import { useEffect } from "react";
import userStore from "../../../stores/userStore";
import ProfileContainer from "./ProfileContainer";

const UserProfile = () => {
  const { fetchProfile } = userStore();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchProfile(userId as string);
  }, [userId, fetchProfile]);

  return (
    <Flex w={"full"} p={5} direction={"row"} gap={5} align={"flex-start"}>
      <ProfileContainer />
      <UserProfilePersonalInformationContainer />
    </Flex>
  );
};

export default UserProfile;
