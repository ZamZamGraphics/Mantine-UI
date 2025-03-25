import {
  IconAddressBook,
  IconBuildingBank,
  IconDashboard,
  IconReceipt,
  IconReceiptRefund,
  IconSettings,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

const sidebarRoutes = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <IconDashboard size={16} stroke={1} />,
  },
  {
    path: "/dashboard/suppliers",
    title: "Suppliers",
    icon: <IconBuildingBank size={16} stroke={1} />,
    child: [
      {
        path: "/dashboard/suppliers",
        title: "All Suppliers",
      },
      {
        path: "/dashboard/suppliers/new",
        title: "Add New",
      },
    ],
  },
  {
    path: "/dashboard/products",
    title: "Products",
    icon: <IconShoppingCart size={16} stroke={1} />,
    child: [
      {
        path: "/dashboard/products",
        title: "All Products",
      },
      {
        path: "/dashboard/products/new",
        title: "Add New",
      },
      {
        path: "/dashboard/products/categories",
        title: "Categories",
      },
    ],
  },
  {
    path: "/dashboard/customers",
    title: "Customers",
    icon: <IconAddressBook size={16} stroke={1} />,
    child: [
      {
        path: "/dashboard/customers",
        title: "All Customers",
      },
      {
        path: "/dashboard/customers/new",
        title: "Add New",
      },
    ],
  },
  {
    path: "/dashboard/orders",
    title: "Orders",
    icon: <IconReceipt size={16} stroke={1} />,
    child: [
      {
        path: "/dashboard/orders",
        title: "All orders",
      },
      {
        path: "/dashboard/orders/new",
        title: "Add New",
      },
      {
        path: "/dashboard/orders/items",
        title: "Items",
      },
    ],
  },
  {
    path: "/dashboard/expend",
    title: "Expend",
    icon: <IconReceiptRefund size={16} stroke={1} />,
    child: [
      {
        path: "/dashboard/expend",
        title: "All Expend",
      },
      {
        path: "/dashboard/expend/new",
        title: "Add New",
      },
    ],
  },
  {
    path: "/dashboard/users",
    title: "Users",
    icon: <IconUsers size={16} stroke={1} />,
    child: [
      {
        path: "/dashboard/users",
        title: "All Users",
      },
      {
        path: "/dashboard/users/new",
        title: "Add New",
      },
      {
        path: "/dashboard/users/profile",
        title: "Your Profile",
      },
    ],
  },
  {
    path: "/dashboard/settings",
    title: "Settings",
    icon: <IconSettings size={16} stroke={1} />,
  },
];

export default sidebarRoutes;
