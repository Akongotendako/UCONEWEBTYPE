import { ADMIN_ROUTE } from "../../../../routes/admin/adminRoute";
import { USER_ROUTES } from "../../../../routes/user/userRoute";

export const getShopMenuItems = (role: string) => [
  {
    value: "All",
    text: "All",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}`,
    role: ["admin", "user"],
  },
  {
    value: "Lanyard",
    text: "Lanyard",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/Lanyard`,
    role: ["admin", "user"],
  },
  {
    value: "T-Shirt",
    text: "T-Shirt",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/T-Shirt`,
    role: ["admin", "user"],
  },
  {
    value: "Uniform",
    text: "Uniform",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER}/${USER_ROUTES.USER_SHOP}/Uniform`,
    role: ["admin", "user"],
  },
  {
    value: "Add Product",
    text: "Add Product",
    path: ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM,
    role: ["admin"],
  },
];
