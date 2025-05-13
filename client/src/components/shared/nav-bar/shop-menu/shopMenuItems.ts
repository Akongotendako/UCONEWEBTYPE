import { ADMIN_ROUTE } from "../../../../routes/admin/adminRoute";
import { USER_ROUTES } from "../../../../routes/user/userRoute";

export const getShopMenuItems = (role: string) => [
  {
    value: "All",
    text: "All",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_BASED
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}`,
    role: ["admin", "user"],
  },
  {
    value: "Apparel",
    text: "Apparel",
    path:
      role === "admin"
        ? `${ADMIN_ROUTE.ADMIN}/${ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_BASED}/Apparel`
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/Apparel`,
    role: ["admin", "user"],
  },
  {
    value: "Accessories",
    text: "Accessories",
    path:
      role === "admin"
        ? `${ADMIN_ROUTE.ADMIN}/${ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_BASED}/Accessories`
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/Accessories`,
    role: ["admin", "user"],
  },
  {
    value: "Academic Materials",
    text: "Academic Materials",
    path:
      role === "admin"
        ? `${ADMIN_ROUTE.ADMIN}/${ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_BASED}/Academic Materials`
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/Academic Materials`,
    role: ["admin", "user"],
  },
  {
    value: "Add Product",
    text: "Add Product",
    path: `${ADMIN_ROUTE.ADMIN}/${ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_BASED}/${ADMIN_ROUTE.ADMIN_SHOP.ADMIN_SHOP_ADD}`,
    role: ["admin"],
  },
];
