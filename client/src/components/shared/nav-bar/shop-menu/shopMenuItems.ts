import { ADMIN_ROUTE } from "../../../../routes/admin/adminRoute";
import { USER_ROUTES } from "../../../../routes/user/userRoute";

export const getShopMenuItems = (role: string) => [
  {
    value: "All",
    text: "All",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER_SHOP}/${"All"}/category`,
    role: ["admin", "user"],
  },
  {
    value: "Lanyard",
    text: "Lanyard",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER_SHOP}/${"Lanyard"}/category`,
    role: ["admin", "user"],
  },
  {
    value: "T-Shirt",
    text: "T-Shirt",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER_SHOP}/${"T-Shirt"}/category`,
    role: ["admin", "user"],
  },
  {
    value: "Uniform",
    text: "Uniform",
    path:
      role === "admin"
        ? ADMIN_ROUTE.ADMIN_SHOP_ALL
        : `${USER_ROUTES.USER_SHOP}/${"Uniform"}/category`,
    role: ["admin", "user"],
  },
  {
    value: "Add Product",
    text: "Add Product",
    path: ADMIN_ROUTE.ADMIN_SHOP_ADD_ITEM,
    role: ["admin"],
  },
];
