import userStore from "../../../../../stores/userStore";
import { HStack } from "@chakra-ui/react";
import InputField from "../../../../form/InputField";

const UserProfilePersonalInformationCredential = () => {
  const { user, setField } = userStore();
  return (
    <HStack w={"full"} gap={5}>
      <InputField
        title={"Email"}
        obj={user.signin}
        field={"email"}
        value={user.signin.email}
        onChange={(value) => setField("signin", "email", value)}
      />
      <InputField
        title={"Password"}
        obj={user.signin}
        field={"password"}
        value={user.signin.password}
        onChange={(value) => setField("signin", "password", value)}
      />
    </HStack>
  );
};

export default UserProfilePersonalInformationCredential;
