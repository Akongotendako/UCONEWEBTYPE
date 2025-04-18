import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { AUTH_ROUTE } from "./pages/auth/authRoute";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import AdminHome from "./pages/admin/home/AdminHome";
import AdminShop from "./pages/admin/shop/AdminShop";
import AdminShopAll from "./pages/admin/shop-all/AdminShopAll";
import { ADMIN_ROUTE } from "./routes/admin/adminRoute";
import AdminShopAddItem from "./pages/admin/shop-add-item/AdminShopAddItem";
import AdminShopUpdateItem from "./pages/admin/shop-update-item/AdminShopUpdateItem";
import { USER_ROUTES } from "./routes/user/userRoute";
import UserDashboard from "./pages/user/dashboard/UserDashboard";
import UserHome from "./pages/user/home/UserHome";
import UserShop from "./pages/user/shop/UserShop";
import UserCategoryMenu from "./layout/user-category-menu/UserCategoryMenu";
import UserAddToCart from "./pages/user/add-to-cart/UserAddToCart";

function App() {
  return (
    <Box w={"full"} h={"100vh"} bg={"#121A21"}>
      <Routes>
        {/** Login route */}
        <Route index path={AUTH_ROUTE.LOGIN} element={<Login />} />
        {/** Sign up */}
        <Route path={AUTH_ROUTE.SIGNUP} element={<Signup />} />
        <Route path={ADMIN_ROUTE.ADMIN} element={<AdminDashboard />}>
          <Route path={ADMIN_ROUTE.ADMIN_HOME} element={<AdminHome />} />
          <Route path={ADMIN_ROUTE.ADMIN_SHOP} element={<AdminShop />}>
            <Route
              path={ADMIN_ROUTE.ADMIN_SHOP_ALL}
              element={<AdminShopAll />}
            />
            <Route
              path={ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM}
              element={<AdminShopAddItem />}
            />
            <Route
              path={ADMIN_ROUTE.ADMIN_SHOP_UPDATE_ITEM}
              element={<AdminShopUpdateItem />}
            />
          </Route>
        </Route>
        {/** User dashboard */}
        <Route path={USER_ROUTES.USER} element={<UserDashboard />}>
          <Route path={USER_ROUTES.USER_HOME} element={<UserHome />} />
          <Route path={USER_ROUTES.USER_SHOP} element={<UserShop />}>
            <Route path={USER_ROUTES.USER_CATEGORY} element={<UserCategoryMenu />} />
            <Route path={USER_ROUTES.USER_ADD_TO_CART} element={<UserAddToCart />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
