import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBarContainer from "../../../components/shared/nav-bar/NavBarContainer";

const AdminDashboard = () => {
  return (
    <Flex bg={"#121A21"} w={"full"} h={"full"} position={"relative"} direction={"column"}>
      <NavBarContainer/>
      <Box flex={1} overflow={"auto"}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
