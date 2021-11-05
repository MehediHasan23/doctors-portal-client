import React from "react";
import { Button, Typography, Grid, Container, ButtonBase } from "@mui/material";
import login from "./../../../images/login.png";

const Login = () => {
  return (
    <div>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{}}>
          <Grid style={{ textAlign: "left" }} item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: "500" }}></Typography>
            <Typography variant="h6"></Typography>
            <Button variant="contained">Get Appointment</Button>
          </Grid>

          <Grid item xs={12} md={7}>
            
            <img
              style={{ width: "100%", height: "615px" }}
              src={login}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
