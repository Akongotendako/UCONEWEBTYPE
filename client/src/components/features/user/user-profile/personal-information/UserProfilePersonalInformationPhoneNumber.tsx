import { HStack } from "@chakra-ui/react";
import userStore from "../../../../../stores/userStore";
import InputField from "../../../../form/InputField";
import PrimaryButton from "../../../../ui/PrimaryButton";

const UserProfilePersonalInformationPhoneNumber = () => {
  const { user, setField, updateProfile } = userStore();
  const userId = localStorage.getItem("userId")
  return (
    <HStack w={"full"} gap={5} align={"flex-end"}>
      <InputField
        title={"Phone Number"}
        obj={user.profile}
        field={"phoneNumber"}
        value={user.profile.phoneNumber}
        onChange={(value) => setField("profile", "phoneNumber", value)}
      />
      <PrimaryButton width="1/2" onclick={() => updateProfile(userId as string)}>Save Changes</PrimaryButton>
    </HStack>
  );
};

export default UserProfilePersonalInformationPhoneNumber;
