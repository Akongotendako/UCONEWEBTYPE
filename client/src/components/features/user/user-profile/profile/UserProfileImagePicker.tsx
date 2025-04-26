import { HStack, Image } from "@chakra-ui/react";
import avatar from "../../../../../assets/man.png";
import userStore from "../../../../../stores/userStore";

const UserProfileImagePicker = () => {
  const {user} = userStore()
  return (
    <HStack w={"full"} justify={"center"}>
      <Image
        boxSize={28}
        src={user.profile.profilePic?.url ? user.profile.profilePic.url : avatar}
        fit={"cover"}
        borderRadius={"full"}
      />
    </HStack>
  );
};

export default UserProfileImagePicker;
