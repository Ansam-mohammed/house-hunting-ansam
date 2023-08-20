import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css'

export default function Types() {
  return (<>
    <Box sx={{ width: '100%', maxWidth: 500 }} >
     <Typography variant="h3" gutterBottom className='title'>
       Delivering Space That Inspires.
      </Typography>
      <Typography variant="h4" gutterBottom className='subtitle'  >
      Find your <span style={{color:'#FF7048'}}>dream home.</span> 
      </Typography>

      <Typography variant="subtitle1" gutterBottom className='para'>
        Explore the different types of home and office space available to rented discover which is right for your home and business
      </Typography>
      </Box>

     
    </>
  );
}
