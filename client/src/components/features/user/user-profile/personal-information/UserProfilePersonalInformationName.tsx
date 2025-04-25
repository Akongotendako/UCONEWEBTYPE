import { HStack } from "@chakra-ui/react";
import React from "react";
import InputField from "../../../../form/InputField";
import userStore from "../../../../../stores/userStore";

const UserProfilePersonalInformationName = () => {

    const {user, setField} = userStore()
  return (
    <HStack w={"full"} gap={5}>
      <InputField
        title={"First Name"}
        obj={user.profile}
        field={"firstName"}
        value={user.profile.firstName}
        onChange={(value) => setField("profile", "firstName", value)}
      />
      <InputField
        title={"Last Name"}
        obj={user.profile}
        field={"lastName"}
        value={user.profile.firstName}
        onChange={(value) => setField("profile", "lastName", value)}
      />
    </HStack>
  );
};

export default UserProfilePersonalInformationName;
