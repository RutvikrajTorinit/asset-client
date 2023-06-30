import { createBrowserRouter } from "react-router-dom";

import { Dashboard, Login } from "./lazyLoading";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Dashboard /> }]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

export default routes;
