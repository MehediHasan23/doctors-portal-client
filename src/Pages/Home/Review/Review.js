import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { shadows } from "@mui/system";

import people1 from "./../../../images/people-1.png";
import people2 from "./../../../images/people-2.png";
import people3 from "./../../../images/people-3.png";

const Review = () => {
  return (
    <div>
      <Container sx={{ marginTop: "100px" }}>
        <Grid style={{ textAlign: "left", marginBottom: "70px" }}>
          <Typography sx={{ color: "primary.main" }} variant="h6">
            Testimonial
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Whats Our Patients <br /> Says
          </Typography>
        </Grid>
        <Grid container>
          {/* first */}
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Typography component="div" sx={{ boxShadow: 3 }}>
              <Typography sx={{ color: "gray", fontSize: "15px", letterSpacing: 2 }} variant="h6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                veniam enim obcaecati excepturi aperiam tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, blanditiis?
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  color: "primary.main",
                  marginTop: "50px",
                }}
              >
                <Grid>
                  <img src={people1} alt="" />
                </Grid>
                <Grid>
                  <Typography variant="h6">Winson Harry</Typography>
                  <Typography variant="body2" gutterBottom>
                    California
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Grid>

          {/* 2nd */}
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Typography component="div" sx={{ boxShadow: 3 }}>
              <Typography
                sx={{ color: "gray", fontSize: "15px", letterSpacing: 2 }}
                variant="h6"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                veniam enim obcaecati excepturi aperiam tempore. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cum, est!
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  color: "primary.main",
                  marginTop: "50px",
                }}
              >
                <Grid>
                  <img src={people2} alt="" />
                </Grid>
                <Grid>
                  <Typography variant="h6">Winson Harry</Typography>
                  <Typography variant="body2" gutterBottom>
                    California
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          {/* 2nd */}
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Typography component="div" sx={{ boxShadow: 3 }}>
              <Typography
                sx={{ color: "gray", fontSize: "15px", letterSpacing: 2 }}
                variant="h6"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                veniam enim obcaecati excepturi aperiam tempore. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Corporis, non.
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  color: "primary.main",
                  marginTop: "50px",
                }}
              >
                <Grid>
                  <img src={people3} alt="" />
                </Grid>
                <Grid>
                  <Typography variant="h6">Winson Harry</Typography>
                  <Typography variant="body2" gutterBottom>
                    California
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Review;
