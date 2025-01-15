import { createBrowserRouter} from "react-router-dom";
import HomaPage from "../pages/HomeLayouts/HomaPage";
import Login from "../pages/authRelatedPages/Login";
import MainPage from "../main/MainPage";
import Register from "../pages/authRelatedPages/Register";
import Dashboard from "../pages/DashboardLayouts/Dashboard";
import AdminHome from "../pages/DashboardLayouts/admin/AdminHome";
import ManageUser from "../pages/DashboardLayouts/admin/ManageUser";

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
        path: 'manage-user',
        element: <ManageUser></ManageUser>
      }
    ]
  }
]);
