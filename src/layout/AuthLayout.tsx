import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

import { Box } from "@mui/material";
import { cookieToken } from "../helper/constants";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const token = Cookies.get(cookieToken);

  return (
    <Box
      sx={{
        flex: 1,
        height: "100%"
      }}
    >
      {!token ? children || <Outlet /> : <Navigate to="/" />}
    </Box>
  );
};

export default AuthLayout;
