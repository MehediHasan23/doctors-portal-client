import {
  Container,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import login from "./../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { user, emailLogIn, loading, error, signInUsingGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});

  //email form
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginData(newData);
  };
  //email login
  const handelLogin = (e) => {
    e.preventDefault();
    emailLogIn(loginData.email, loginData.password, location, history);
  };

  //google
  const handelGoogle = (location, history) => {
    signInUsingGoogle(location, history);
  };

  return (
    <Container>
      {/* <Navigation /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} sx={{ mt: 15, pb: 3 }}>
          <Typography variant="h6" sx={{ color: "gray" }}>
            Login
          </Typography>
          <form onSubmit={handelLogin}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="your email"
              variant="standard"
              name="email"
              type="email"
              onChange={handelOnChange}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="your password"
              variant="standard"
              name="password"
              type="password"
              onChange={handelOnChange}
            />
            <Button
              type="submit"
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/registration">
              <Button variant="text">New user? please Registration...</Button>
            </NavLink>
          </form>
          <Button onClick={handelGoogle} variant="contained">
            google login
          </Button>
          {loading && <CircularProgress />}
          {user?.email && <Alert severity="success">successfully login</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <img style={{ width: "90%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
