import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const UserShop = () => {
  return (
    <Box w={"full"} h={"full"} p={5}>
      <Outlet />
    </Box>
  );
};

export default UserShop;
 