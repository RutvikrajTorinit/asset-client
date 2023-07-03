import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  TextField,
  Box,
  // Button,
  useTheme
} from "@mui/material";

import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { login } from "../services/auth";

interface LOGIN_DATA {
  email: string;
  password: string;
}

const Login = () => {
  const theme = useTheme();

  const [loginData, setLoginData] = useState<LOGIN_DATA>({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await login(loginData);
    if (res) {
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
        // backgroundColor: theme.colors.primary.light
      }}
    >
      <Card className="rounded-none" sx={{ width: "30%" }}>
        <CardHeader
          title="Login"
          sx={{ backgroundColor: theme.colors.primary.light, color: "white" }}
        />
        <Divider />
        <CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 }
            }}
            noValidate
            autoComplete="off"
            display={"flex"}
            flexDirection={"column"}
          >
            <TextField
              required
              id="email"
              name="email"
              value={loginData.email}
              label="Email"
              placeholder="demo@email.com"
              variant="standard"
              type="text"
              onChange={handleChange}
            />

            <TextField
              required
              id="password"
              name="password"
              value={loginData.password}
              label="Password"
              placeholder="******"
              variant="standard"
              type="password"
              onChange={handleChange}
            />

            <Link
              to={"/sign-up"}
              style={{ marginLeft: "auto", paddingTop: 10, paddingBottom: 10 }}
            >
              Don't have an account? Register
            </Link>

            <Button
              txt="Login"
              onClick={handleLogin}
              fullWidth={false}
              sx={{ width: "27%", mx: "auto" }}
              isLoading={isLoading}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
