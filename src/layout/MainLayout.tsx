import Cookies from "js-cookie";
import { FC, ReactNode } from "react";
import { Box, alpha, lighten, useTheme } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
import { cookieToken } from "../helper/constants";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = () => {
  const theme = useTheme();

  // const loggedUser = JSON.parse(Cookies.get(cookieUser) || "{}");

  const token = Cookies.get(cookieToken);

  // const { data } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () => getUserByID(loggedUser?.user_id)
  // });

  // if (!data) return <h1>Loading....</h1>;

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          ".MuiPageTitle-wrapper": {
            background:
              theme.palette.mode === "dark"
                ? theme.colors.alpha?.trueWhite[5]
                : theme.colors.alpha?.white[50],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === "dark"
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`
          }
        }}
      >
        <Navbar />
        <Sidebar />
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            display: "block",
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up("lg")]: {
              ml: `${theme.sidebar.width}`
            }
          }}
        >
          <Box display="block">
            {token ? <Outlet /> : <Navigate to="/login" />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
