import { VStack } from "@chakra-ui/react";
import userStore from "../../../../../stores/userStore";
import InputField from "../../../../form/InputField";
import Title from "../../../../ui/Title";

const UserCartCheckoutBillingDetails = () => {
  const { user, setField } = userStore();
  return (
    <VStack
      w={"1/2"}
      borderColor={"#FFFFFF80"}
      borderWidth={"1px"}
      rounded={"md"}
      p={5}
      align={"flex-start"}
    >
      {/** Title */}
      <Title>Billing Details</Title>
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
        value={user.profile.lastName}
        onChange={(value) => setField("profile", "lastName", value)}
      />

      <InputField
        title={"Phone Number"}
        obj={user.profile}
        field={"phoneNumber"}
        value={user.profile.phoneNumber}
        onChange={(value) => setField("profile", "phoneNumber", value)}
      />

      <InputField
        title={"Email"}
        obj={user.signin}
        field={"email"}
        value={user.signin.email}
        onChange={(value) => setField("signin", "email", value)}
      />
    </VStack>
  );
};

export default UserCartCheckoutBillingDetails;
