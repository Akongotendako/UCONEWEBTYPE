import {
  Menu,
  HStack,
  Icon,
  Portal,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ADMIN_ROUTE } from "../../../../routes/admin/adminRoute";
import { useNavigate } from "react-router-dom";
import { getShopMenuItems } from "./shopMenuItems";
import productStore from "../../../../stores/productStore";

interface ShopMenuContainerProps {
  role: "admin" | "user";
}

const ShopMenuContainer = (props: ShopMenuContainerProps) => {
  const { clearAllProperties } = productStore();
  const navigate = useNavigate();

  const shopMenuItems = getShopMenuItems(props.role);

  return (
    <Menu.Root>
      <Menu.Trigger>
        <HStack align="center" cursor="pointer">
          <ChakraLink
            onClick={() => navigate(ADMIN_ROUTE.ADMIN_SHOP)}
            color="#FFF"
            textDecoration="none"
            _hover={{ color: "#94ADC7" }}
          >
            Shop
          </ChakraLink>
          <Icon size="lg" _hover={{ color: "#94ADC7" }} cursor="pointer">
            <RiArrowDropDownLine color="#FFF" />
          </Icon>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bg={"#243647"} px={3} py={5}>
            <Flex direction="column" gap="2">
              {shopMenuItems.map(
                (item) =>
                  item.role.includes(props.role) && (
                    <Menu.Item
                      key={item.value}
                      value={item.path}
                      color="#FFF"
                      mb="2"
                      onClick={() => {
                        navigate(item.path);
                        clearAllProperties();
                      }}
                      _hover={{ color: "#94ADC7" }}
                      bg="transparent"
                      _focus={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                    >
                      {item.text}
                    </Menu.Item>
                  )
              )}
            </Flex>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ShopMenuContainer;
