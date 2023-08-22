import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './style.css'




export default function MediaCard({houses}) {
    const { title, bathroom,bedroom,location,description,price,image  } = houses;
 
    return (
      
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}  id="card" >
      <CardMedia
        sx={{ height: 140 }}
        image= {image}
        id='media'
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" id='cardTitle'>
       {title} {price}
        </Typography>
        
            <Typography variant="h6" id='cardDetails'></Typography>
        <Typography variant="body2" color="primary.main" id='location'>
          <BathtubIcon/> {bathroom}
          <BedIcon/> {bedroom}
           <LocationOnIcon id='icon'/> {location}
       
           </Typography>
    
          <Typography variant="body2" color="primary.main" id='description'>
   {description}
    </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Learn More</Button>
      </CardActions>
    
    </Card>
    
    </div>
  );
}



