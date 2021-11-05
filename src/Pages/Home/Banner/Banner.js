import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import chair from "./../../../images/chair.png";
import bg from "./../../../images/bg.png";

const backgroundImg = {
  background: `url(${bg})`,
};
const varticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "450px",
};
const Banner = () => {
  return (
    <div>
      <Container style={backgroundImg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{}} style={varticalCenter}>
          <Grid style={{ textAlign: "left" }} item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: "500" }}>
              Your new smile <br /> starts here
            </Typography>
            <Typography variant="h6" sx={{color:'gray'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              expedita nesciunt minus natus est, magnam libero ullam quidem
              officia cupiditate!
            </Typography>
            <Button variant="contained">Get Appointment</Button>
          </Grid>

          <Grid item xs={12} md={7}>
            <img style={{ height: "250px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
