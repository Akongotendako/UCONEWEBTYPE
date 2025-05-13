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
import UserAddToCart from "./pages/user/add-to-cart/UserAddToCart";
import UserShopCategories from "./pages/user/shop-all/UserShopCategories";
import UserProfile from "./pages/user/profile/UserProfile";
import UserOrderContainer from "./pages/user/orders/UserOrderContainer";
import UserOrderMainContent from "./components/features/user/user-order/main-content/UserOrderMainContent";
import UserOrderDetailsContainer from "./components/features/user/user-order/details/UserOrderDetailsContainer";
import UserCartContainer from "./pages/user/cart/container/UserCartContainer";
import UsercartMainContent from "./pages/user/cart/main-content/UserCartMainContent";
import UserPayment from "./pages/user/cart/payment/UserPayment";
import UserCartCheckout from "./pages/user/cart/checkout/UserCartCheckout";
import AdminStudentMainContainer from "./pages/admin/student/admin-student-main-content/AdminStudentMainContainer";
import AdminStudentContainer from "./pages/admin/student/admin-student-container/AdminStudentContainer";
import AdminStudentDetailsContainer from "./pages/admin/student/details/AdminStudentDetailsContainer";
import AdminOrderContainer from "./pages/admin/orders/container/AdminOrderContainer";
import AdminOrderMainContentContainer from "./pages/admin/orders/main-content/AdminOrderMainContentContainer";

function App() {
  return (
    <Box w={"full"} h={"100vh"} bg={"#121A21"}>
      <Routes>
        {/** Login route */}
        <Route index path={AUTH_ROUTE.LOGIN} element={<Login />} />
        {/** Sign up */}
        <Route path={AUTH_ROUTE.SIGNUP} element={<Signup />} />

        {/** Admin */}
        <Route path={ADMIN_ROUTE.ADMIN} element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />

          {/** Admin Shop */}
          <Route path={ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_BASED} element={<AdminShop />}>
            <Route
              index
              element={<AdminShopAll />}
            />

            <Route path={ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_MAIN_PAGE} element={<AdminShopAll/>}/>
            <Route
              path={ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_ADD}
              element={<AdminShopAddItem />}
            />
            <Route
              path={ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_UPDATE}
              element={<AdminShopUpdateItem />}
            />
          </Route>

          {/** Student */}
          <Route
            path={ADMIN_ROUTE.ADMIN_STUDENT.ADMIN_STUDENT_BASED}
            element={<AdminStudentContainer />}
          >
            <Route index element={<AdminStudentMainContainer />} />
            <Route
              path={ADMIN_ROUTE.ADMIN_STUDENT.ADMIN_STUDENT_DETAILS}
              element={<AdminStudentDetailsContainer />}
            />
          </Route>

          {/**Order */}
          <Route
            path={ADMIN_ROUTE.ADMIN_ORDER.ADMIN_ORDER_BASED}
            element={<AdminOrderContainer />}
          >

            <Route index element={<AdminOrderMainContentContainer />} />

          </Route>

          <Route path={ADMIN_ROUTE.ADMIN_PROFILE} element={<UserProfile/>}/>
        </Route>
        {/** User dashboard */}
        <Route path={USER_ROUTES.USER} element={<UserDashboard />}>
          <Route index element={<UserHome />} />

          {/** Shop */}
          <Route path={USER_ROUTES.USER_SHOP} element={<UserShop />}>
            <Route index element={<UserShopCategories />} />
            <Route
              path={USER_ROUTES.USER_CATEGORY}
              element={<UserShopCategories />}
            />
            <Route
              path={USER_ROUTES.USER_ADD_TO_CART}
              element={<UserAddToCart />}
            />
          </Route>

          {/** Cart */}
          <Route path={USER_ROUTES.USER_CART} element={<UserCartContainer />}>
            <Route index element={<UsercartMainContent />} />
            <Route
              path={USER_ROUTES.USER_CHECKOUT}
              element={<UserCartCheckout />}
            />
            <Route path={USER_ROUTES.USER_Payment} element={<UserPayment />} />
          </Route>

          {/** Order */}
          <Route path={USER_ROUTES.USER_ORDER} element={<UserOrderContainer />}>
            <Route index element={<UserOrderMainContent />} />
            <Route
              path={USER_ROUTES.USER_ORDER_DETAILS}
              element={<UserOrderDetailsContainer />}
            />
          </Route>
          <Route path={USER_ROUTES.USER_PROFILE} element={<UserProfile />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
