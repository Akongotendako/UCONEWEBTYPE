import { HStack, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { USER_ROUTES } from "../../../routes/user/userRoute";
import { ADMIN_ROUTE } from "../../../routes/admin/adminRoute";

const AccountMenus = () => {
  const role = localStorage.getItem("role")
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(role === "user" ? USER_ROUTES.USER_PROFILE : ADMIN_ROUTE.ADMIN_PROFILE);
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
