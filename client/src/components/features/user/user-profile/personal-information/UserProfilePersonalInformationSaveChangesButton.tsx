import PrimaryButton from "../../../../ui/PrimaryButton";
import userStore from "../../../../../stores/userStore";
import { HStack } from "@chakra-ui/react";
import SecondaryButton from "../../../../ui/SecondaryButton";
import { useNavigate } from "react-router-dom";
import productStore from "../../../../../stores/productStore";

const UserProfilePersonalInformationSaveChangesButton = () => {
  const navigate = useNavigate();
  const {clearAllProperties} = productStore()

  const userId = localStorage.getItem("userId");
  const { updateProfile } = userStore();


  const handleLogOut = () => {
    clearAllProperties()
    navigate("/");
  };
  return (
    <HStack gap={10}>
      <PrimaryButton onclick={() => updateProfile(userId as string)}>
        Save Changes
      </PrimaryButton>
      <SecondaryButton onClick={handleLogOut}>Log Out</SecondaryButton>
    </HStack>
  );
};

export default UserProfilePersonalInformationSaveChangesButton;
