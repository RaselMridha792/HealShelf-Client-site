import { createBrowserRouter } from "react-router-dom";
import HomaPage from "../pages/HomeLayouts/HomaPage";
import Login from "../pages/authRelatedPages/Login";
import MainPage from "../main/MainPage";
import Register from "../pages/authRelatedPages/Register";
import Dashboard from "../pages/DashboardLayouts/Dashboard";
import AdminHome from "../pages/DashboardLayouts/admin/AdminHome";
import ManageUser from "../pages/DashboardLayouts/admin/ManageUser";
import SellerHome from "../pages/DashboardLayouts/seller/SellerHome";
import ShopNow from "../pages/shop/ShopNow";
import CategoryDetails from "../pages/categoryDetails/CategoryDetails";
import UserCart from "../pages/cart/UserCart";
import Checkout from "../pages/DashboardLayouts/Checkout/Checkout";
import Invoice from "../pages/invoice/Invoice";
import PaymentHistory from "../pages/DashboardLayouts/user/PaymentHistory";
import AdminRoutes from "./privetRoutes/AdminRoutes";
import PrivetRoutes from "./privetRoutes/PrivetRoutes";
import ManagePayments from "../pages/DashboardLayouts/admin/ManagePayments";
import SalesReport from "../pages/DashboardLayouts/admin/SalesReport";
import ManageMedicine from "../pages/DashboardLayouts/seller/ManageMedicine";
import SellerPayManagement from "../pages/DashboardLayouts/seller/SellerPayManagement";
import AskForAdvertise from "../pages/DashboardLayouts/seller/AskForAdvertise";
import ManageBanner from "../pages/DashboardLayouts/admin/ManageBanner";
import ManageCategory from "../pages/DashboardLayouts/admin/ManageCategory";
import UserProfile from "../pages/userProfile/UserProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <HomaPage></HomaPage>,
      },
      {
        path: '/profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shop-now",
        element: <ShopNow></ShopNow>,
      },
      {
        path: "/category/:category",
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/cart",
        element: (
          <PrivetRoutes>
            {" "}
            <UserCart></UserCart>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin-home",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoutes>
            <ManageUser></ManageUser>
          </AdminRoutes>
        ),
      },
      {
        path: "manage-category",
        element: (
          <AdminRoutes>
            <ManageCategory></ManageCategory>
          </AdminRoutes>
        ),
      },
      {
        path: "admin-banner-ads",
        element: (
          <AdminRoutes>
            <ManageBanner></ManageBanner>
          </AdminRoutes>
        ),
      },
      {
        path: "admin-manage-payments",
        element: (
          <AdminRoutes>
            <ManagePayments></ManagePayments>
          </AdminRoutes>
        ),
      },
      {
        path: "sales-report",
        element: (
          <AdminRoutes>
            <SalesReport></SalesReport>,
          </AdminRoutes>
        ),
      },
      // seller routes
      {
        path: "seller-home",
        element: <SellerHome></SellerHome>,
      },
      {
        path: "manage-medicine",
        element: <ManageMedicine></ManageMedicine>,
      },
      {
        path: "seller-payment-management",
        element: <SellerPayManagement></SellerPayManagement>,
      },
      {
        path: "seller-ads-management",
        element: <AskForAdvertise></AskForAdvertise>,
      },
      // user routes
      {
        path: "customer-home",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment-management",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "invoice",
        element: <Invoice></Invoice>,
      },
    ],
  },
]);
