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

interface REGISTER_DATA {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const theme = useTheme();

  const [registerData, setRegisterData] = useState<REGISTER_DATA>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(registerData));
    navigate("/");
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
          title="Signup"
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
              id="firstName"
              name="firstName"
              label="First Name"
              value={registerData.firstName}
              variant="standard"
              placeholder="First Name"
              type="text"
              onChange={handleChange}
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              value={registerData.lastName}
              variant="standard"
              placeholder="Last Name"
              type="text"
              onChange={handleChange}
            />
            <TextField
              required
              id="email"
              name="email"
              value={registerData.email}
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
              value={registerData.password}
              label="Password"
              placeholder="******"
              variant="standard"
              type="password"
              onChange={handleChange}
            />

            <Link to={"/login"} style={{ marginLeft: "auto" }}>
              All ready have an account? Login
            </Link>

            <Button
              txt="Register"
              onClick={handleRegister}
              fullWidth={false}
              sx={{ width: "20%", mx: "auto" }}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Signup;
