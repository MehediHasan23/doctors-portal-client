import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { Schedule, PhoneInTalk, Place } from "@mui/icons-material";


const InfoBanner = () => {
  return (
    <Container style={{ marginTop: "-50px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            alignSelf: "center",

            p: 1,
          }}
          // style={{ height: "250px" }}
        >
          <Typography
            component="div"
            sx={{
              p: 2,
              bgcolor: "primary.main",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 2,
            }}
            style={{ height: "150px" }}
          >
            <Grid item xs={12} sm={3} md={3}>
              <Typography>
                <Schedule style={{ fontSize: 70, color: "white" }}></Schedule>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{ color: "white" }}>
              <Typography variant="h6">Opening Hours</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Lorem ipsum dolor sit amet consectetur
              </Typography>
            </Grid>
          </Typography>
        </Grid>
        {/* 2nd */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            alignSelf: "center",

            p: 1,
          }}
          // style={{ height: "150px" }}
        >
          <Typography
            component="div"
            sx={{
              p: 2,
              bgcolor: "text.secondary",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 2,
            }}
            style={{ height: "150px" }}
          >
            <Grid item xs={12} sm={3} md={3}>
              <Typography>
                <PhoneInTalk
                  style={{ fontSize: 70, color: "white" }}
                ></PhoneInTalk>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{ color: "white" }}>
              <Typography variant="h6">Contact Us Now</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                +8801750830540
              </Typography>
            </Grid>
          </Typography>
        </Grid>
        {/* 3rd */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            alignSelf: "center",

            p: 1,
          }}
          // style={{ height: "150px" }}
        >
          <Typography
            component="div"
            sx={{
              p: 2,
              bgcolor: "secondary.main",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 2,
            }}
            style={{ height: "150px" }}
          >
            <Grid item xs={12} sm={3} md={3}>
              <Typography>
                <Place style={{ fontSize: 70, color: "white" }}></Place>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{ color: "white" }}>
              <Typography variant="h6">Visit Our location</Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Lorem ipsum dolor sit amet consectetur .
              </Typography>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoBanner;
{
  /* <FontAwesomeIcon style={{ color: "white" }} icon={faPhone} /> */
}
{
  /* <Schedule style={{ fontSize: 70 }}></Schedule> */
}
