import { Flex, HStack, Icon, Link, Menu, Portal } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { USER_ROUTES } from "../../routes/user/userRoute";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ADMIN_ROUTE } from "../../routes/admin/adminRoute";

interface NavigationMenuProps {
  role: string;
}

const NavigationMenu = ({ role }: NavigationMenuProps) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    return role === "admin" ? ADMIN_ROUTE.ADMIN_HOME : USER_ROUTES.USER_HOME;
  };
  const shopMenuItems = [
    {
      value: "All",
      text: "All",
      path: ADMIN_ROUTE.ADMIN_SHOP_ALL,
    },
    {
      value: "Lanyard",
      text: "Lanyard",
      path: ADMIN_ROUTE.ADMIN_SHOP_ALL,
    },
    {
      value: "T-Shirt",
      text: "T-Shirt",
      path: ADMIN_ROUTE.ADMIN_SHOP_ALL,
    },
    {
      value: "Uniform",
      text: "Uniform",
      path: ADMIN_ROUTE.ADMIN_SHOP_ALL,
    },
    {
      value: "Add Product",
      text: "Add Product",
      path: ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM,
    },
  ];
  return (
    <HStack gap={10}>
      <Link
        href={handleNavigation()}
        color="#FFF"
        textDecoration="none"
        _hover={{ color: "#94ADC7" }}
      >
        Home
      </Link>

      {/** this is shop navigation */}
      <Menu.Root>
        <Menu.Trigger>
          <HStack align="center" cursor="pointer">
            <Link
              color="#FFF"
              textDecoration="none"
              _hover={{ color: "#94ADC7" }}
              href={ADMIN_ROUTE.ADMIN_SHOP}
            >
              Shop
            </Link>
            <Icon size="lg" _hover={{ color: "#94ADC7" }} cursor="pointer">
              <RiArrowDropDownLine color="#FFF" />
            </Icon>
          </HStack>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content bg={"#243647"} px={3} py={5}>
              <Flex direction="column" gap="2">
                {shopMenuItems.map((item) => (
                  <Menu.Item
                    key={item.value}
                    value={item.path}
                    color="#FFF"
                    mb="2"
                    onClick={() => {
                      navigate(item.path)
                    }}
                    _hover={{ color: "#94ADC7" }}
                    bg="transparent"
                    _focus={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                  >
                    {item.text}
                  </Menu.Item>
                ))}
              </Flex>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <Link
        href={handleNavigation()}
        color="#FFF"
        textDecoration="none"
        _hover={{ color: "#94ADC7" }}
      >
        Students
      </Link>

      <Link
        href={handleNavigation()}
        color="#FFF"
        textDecoration="none"
        _hover={{ color: "#94ADC7" }}
      >
        Orders
      </Link>
    </HStack>
  );
};

export default NavigationMenu;
