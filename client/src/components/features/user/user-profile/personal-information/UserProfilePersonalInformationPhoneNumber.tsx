import { HStack } from "@chakra-ui/react";
import userStore from "../../../../../stores/userStore";
import InputField from "../../../../form/InputField";

const UserProfilePersonalInformationPhoneNumber = () => {
  const { user, setField } = userStore();
  return (
    <HStack w={"full"} gap={5} align={"flex-end"}>
      <InputField
        title={"Phone Number"}
        obj={user.profile}
        field={"phoneNumber"}
        value={user.profile.phoneNumber}
        onChange={(value) => setField("profile", "phoneNumber", value)}
      />

      <InputField
        title={"Age"}
        obj={user.profile}
        field={"age"}
        value={user.profile.age}
        onChange={(value) => setField("profile", "age", value)}
      />
    </HStack>
  );
};

export default UserProfilePersonalInformationPhoneNumber;
