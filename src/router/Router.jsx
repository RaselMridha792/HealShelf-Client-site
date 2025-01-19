import { createBrowserRouter} from "react-router-dom";
import HomaPage from "../pages/HomeLayouts/HomaPage";
import Login from "../pages/authRelatedPages/Login";
import MainPage from "../main/MainPage";
import Register from "../pages/authRelatedPages/Register";
import Dashboard from "../pages/DashboardLayouts/Dashboard";
import AdminHome from "../pages/DashboardLayouts/admin/AdminHome";
import ManageUser from "../pages/DashboardLayouts/admin/ManageUser";
import SellerHome from "../pages/DashboardLayouts/seller/SellerHome";
import CustomerHome from "../pages/DashboardLayouts/customer/CustomerHome";
import ShopNow from "../pages/shop/ShopNow";
import CategoryDetails from "../pages/categoryDetails/CategoryDetails";
import UserCart from "../pages/cart/UserCart";
import Checkout from "../pages/DashboardLayouts/Checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
        {
            path: '/',
            element: <HomaPage></HomaPage>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/shop-now',
          element: <ShopNow></ShopNow>
        },
        {
          path: '/category/:category',
          element: <CategoryDetails></CategoryDetails>
        },
        {
          path: '/cart',
          element: <UserCart></UserCart>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'admin-home',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'seller-home',
        element: <SellerHome></SellerHome>
      },
      {
        path: 'customer-home',
        element: <CustomerHome />
      },
      {
        path: 'manage-user',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      }
    ]
  }
]);
