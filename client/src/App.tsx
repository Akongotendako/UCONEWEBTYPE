import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { AUTH_ROUTE } from "./pages/auth/authRoute";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { ADMIN_ROUTE } from "./routes/admin/adminRoute";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";

function App() {
  return (
    <Box w={"full"} h={"100vh"} bg={"#121A21"}>
      <Routes>
        {/** Login route */}
        <Route index path={AUTH_ROUTE.LOGIN} element={<Login />} />
        {/** Sign up */}
        <Route path={AUTH_ROUTE.SIGNUP} element={<Signup />} />
        <Route path={ADMIN_ROUTE.ADMIN} element={<AdminDashboard/>}>

        </Route>
      </Routes>
    </Box>
  );
}

export default App;
