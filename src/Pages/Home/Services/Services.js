import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

import whitening from './../../../images/whitening.png'


import cavity from './../../../images/cavity.png';
import fluoride from './../../../images/fluoride.png';


const services = [
  { name: 'fluoride Treatment', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, facere quam modi voluptas sit placeat fuga provident eaque laborum.',img: fluoride },

  { name: 'Cavity Filling', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, facere quam modi voluptas sit placeat fuga provident eaque laborum.',img: cavity },

  { name: 'Teath Whitening', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, facere quam modi voluptas sit placeat fuga provident eaque laborum.',img: whitening },
  
]


const Services = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="div"  sx={{ m: 5, color: 'success.main',fontWeight: 400  }}>
          Our Services
        </Typography>
      <Typography variant="h3" component="div" sx={{ fontWeight: 600, m:3 }}>
          Service we provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            services.map(service => <Service
            key ={service.name}
            service = {service}
            >
            </Service>)
        }
      </Grid>
    </Box>
    </Container>
  );
};


export default Services;


//fake json

/* const services = [
  { name: 'fluoride Treatment', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, facere quam modi voluptas sit placeat fuga provident eaque laborum.',img:'fluoride' },

  { name: 'Cavity Filling', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, facere quam modi voluptas sit placeat fuga provident eaque laborum.',img:'Cavity' },

  { name: 'Teath Whitening', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, facere quam modi voluptas sit placeat fuga provident eaque laborum.',img:'Whitening' },
  
] */