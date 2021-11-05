import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ArrowRightAlt } from "@mui/icons-material";
import people1 from "./../../../images/people-1.png";
import people2 from "./../../../images/people-2.png";

const Blog = () => {
  return (
    <div>
      <Container sx={{ marginTop: "150px" }}>
        <Grid>
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            Our Blog
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            From Our Ne Blog
          </Typography>
        </Grid>
        <Grid container sx={{ marginTop: "150px" }}>
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Typography
              component="div"
              sx={{ boxShadow: 3, bgcolor: "info.main" }}
              style={{ textAlign: "center", color:'white' }}
            >
              <Typography variant="h6">Rashed Kabir</Typography>
              <Typography variant="h6" sx={{ my: 2 }}>
                22 Aug 2018
              </Typography>
              <Typography variant="h6" sx={{ my: 3 }}>
                check at least a doctor in a <br /> year for your teeth.
              </Typography>
              <ArrowRightAlt style={{ fontSize: "70px" }}></ArrowRightAlt>
            </Typography>
          </Grid>

          {/* 2nd  */}

          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Typography component="div" sx={{ boxShadow: 3 }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  color: "primary.main",
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
              <Typography variant="h6" sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repellat,
                assumenda?
              </Typography>
            </Typography>
          </Grid>

          {/* 3rd */}
          <Grid item xs={12} sm={6} md={4} sx={{ p: 3 }}>
            <Typography component="div" sx={{ boxShadow: 3 }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  color: "primary.main",
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
              <Typography variant="h6" sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repellat,
                assumenda?
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;

{
  /* <Grid sx={{ marginTop: "100px" }}>
  <Grid item xs={12} sm={6} md={4} style={{ textAlign: "left" }}>
    <Typography variant="h6" sx={{}}>
      Rashed Kabir
    </Typography>
    <Typography variant="h6" sx={{}}>
      22 Aug 2018
    </Typography>
    <Typography variant="h6" sx={{}}>
      check at least a doctor in a <br /> year for your teeth.
    </Typography>
    <ArrowRightAlt style={{ fontSize: "70px" }}></ArrowRightAlt>
  </Grid>
</Grid>;
 */
}
{
  /* <Grid item xs={12} sm={6} md={4}>
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
</Grid>; */
}
