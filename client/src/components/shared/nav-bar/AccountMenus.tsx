import { HStack, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { USER_ROUTES } from "../../../routes/user/userRoute";

const AccountMenus = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(USER_ROUTES.USER_PROFILE);
  };

  return (
    <HStack gap="5" color="#FFF">
      <Icon
        as={CiSearch}
        size="lg"
        _hover={{ color: "#94ADC7" }}
        cursor="pointer"
      />

      <Icon
        as={IoIosNotificationsOutline}
        size="lg"
        _hover={{ color: "#94ADC7" }}
        cursor="pointer"
      />

      <Icon
        size="lg"
        as={MdOutlineAccountCircle}
        _hover={{ color: "#94ADC7" }}
        cursor="pointer"
        onClick={handleNavigation}
      />
    </HStack>
  );
};

export default AccountMenus;
