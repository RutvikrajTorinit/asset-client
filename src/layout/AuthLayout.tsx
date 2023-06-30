import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100%"
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};

// AuthLayout.propTypes = {
//   children: PropTypes.node
// };

export default AuthLayout;
