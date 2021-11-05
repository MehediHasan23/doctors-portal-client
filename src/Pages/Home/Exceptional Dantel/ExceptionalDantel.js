import React from "react";
import Grid from "@mui/material/Grid";
import treatment from "./../../../images/treatment.png";
import { Button, Container, Typography } from "@mui/material";

const ExceptionalDantel = () => {
  return (
    <Container sx={{ marginTop: "100px", marginBottom: "100px" }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            style={{ width: "auto", height: "450px" }}
            src={treatment}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Exceptional Dental Care, <br />
            On Your Terms
          </Typography>
          <Typography variant="h6" sx={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur blanditiis nihil ad officia eos libero alias sint.
            Facere perferendis aliquam dolor minus atque inventore, nesciunt,
            dignissimos neque odio numquam ad! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur neque ducimus minus
            molestias? Accusamus ullam aliquid aspernatur quis quo, veniam
            exercitationem velit inventore nisi eveniet dignissimos, amet illum
            optio cupiditate?
          </Typography>
          <Button sx={{ mt: 3 }} variant="contained">
            Book Appointment
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionalDantel;
