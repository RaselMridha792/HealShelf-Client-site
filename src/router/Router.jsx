import { createBrowserRouter} from "react-router-dom";
import HomaPage from "../pages/HomeLayouts/HomaPage";
import Login from "../pages/authRelatedPages/Login";
import MainPage from "../main/MainPage";
import Register from "../pages/authRelatedPages/Register";

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
]);
