/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Ingredients from "./views/Ingredient/Ingredients"
import CreateProduct from "views/Products/CreateProduct";
import EditProduct from "views/Products/EditProduct";
import ListProduct from "views/Products/ListProduct";
import AddCategory from "views/Category/AddCategory";
import ListCategory from "views/Category/ListCategory";
import EditCategory from "views/Category/EditCategory";
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/Ingredient",
    name: "Add Ingredient",
    icon: "nc-icon nc-notes",
    component: Ingredients,
    layout: "/admin"
  },
  {
    path: "/addcategory",
    name: "Add Category",
    icon: "nc-icon nc-notes",
    component: AddCategory,
    layout: "/admin",
  },
  {
    path: "/editcategory/:id",
    name: "Edit Category",
    icon: "nc-icon nc-preferences-circle-rotate",
    component: EditCategory,
    layout: "/admin",
  },
  {
    path: "/listcategory",
    name: "Categories",
    icon: "nc-icon nc-bullet-list-67",
    component: ListCategory,
    layout: "/admin",
  },
  {
    path : "/createproduct",
    name : "Create product", 
    icon: "nc-icon nc-notes",
    component : CreateProduct,
    layout : "/admin" ,
  },
  {
    path : "/editproduct/:id",
    name : "Edit product", 
    icon: "nc-icon nc-preferences-circle-rotate",
    component : EditProduct,
    layout : "/admin" ,
  },
  {
    path : "/listproduct",
    name : "Products", 
    icon: "nc-icon nc-bullet-list-67",
    component : ListProduct,
    layout : "/admin" ,
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
