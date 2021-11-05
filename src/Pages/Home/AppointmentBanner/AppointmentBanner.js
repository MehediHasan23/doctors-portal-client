import React from "react";
import Grid from "@mui/material/Grid";
import bg from "./../../../images/appointment-bg.png";
import doctor from "./../../../images/doctor.png";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./AppointmentBanner.css";

const AppointmentBanner = () => {
  const bannerBg = {
    background: `url(${bg})`,
    marginTop: "200px",
    padding: "20px",
  };
  return (
    <Container className="AppointmentBg" style={bannerBg}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            style={{ width: "auto", height: "350px", marginTop: "-100px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ textAlign: "left" }}>
          <Typography variant="h6" sx={{ color: "primary.main", my: 2 }}>
            Appointment
          </Typography>
          <Typography
            variant="h4"
            style={{ color: "white" }}
            sx={{ fontWeight: "500", my: 2 }}
          >
            Make An Appointment <br /> Today
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "white" }}
            gutterBottom
            sx={{ my: 2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            vero. Lorem ipsum dolor sit amet.
          </Typography>
          <Button variant="contained">Book Appointment</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentBanner;
