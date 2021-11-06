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
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const { user, emailRegistration, loading, error } = useAuth();
  const history = useHistory();
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    console.log(newData);
    setLoginData(newData);
  };
  const handelLogin = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("didn't match your password");
      return;
    }
    emailRegistration(
      loginData.email,
      loginData.password,
      loginData.name,
      history
    );
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} sx={{ mt: 15, pb: 3 }}>
          <Typography variant="h6" sx={{ color: "gray" }}>
            Registration
          </Typography>
          {!loading && (
            <form onSubmit={handelLogin}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your name"
                variant="standard"
                name="name"
                onBlur={handelOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your email"
                variant="standard"
                name="email"
                onBlur={handelOnBlur}
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your password"
                variant="standard"
                name="password"
                type="password"
                onBlur={handelOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="your password"
                variant="standard"
                name="password2"
                type="password"
                onBlur={handelOnBlur}
              />
              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Registration
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? login..</Button>
              </NavLink>
            </form>
          )}
          {loading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">user successfully created</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img style={{ width: "90%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
