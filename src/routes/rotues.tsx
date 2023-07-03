import { createBrowserRouter } from "react-router-dom";

import { Assets, Dashboard, Login, Signup } from "./lazyLoading";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/assets", element: <Assets /> }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <Signup />
      }
    ]
  }
]);

export default routes;
