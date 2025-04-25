import { HStack, Image } from "@chakra-ui/react";
import userStore from "../../../../../stores/userStore";

const UserProfileImagePicker = () => {
  const { user } = userStore();
  return (
    <HStack w={"full"} justify={"center"}>
      <Image
        boxSize={28}
        src={user.profile.profilePic.url}
        fit={"cover"}
        borderRadius={"full"}
      />
    </HStack>
  );
};

export default UserProfileImagePicker;
