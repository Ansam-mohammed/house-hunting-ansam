import React from 'react';
import { Link } from 'react-router-dom';
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
import ActionAlerts from '../alert'
import IconCheckboxes from '../fav'
// import Alert from '@mui/material/Alert';
import './style.css'



export default function MediaCard({houses}) {
    const { title, bathroom,bedroom,location,description,price,image ,id } = houses;
 
    return (
      
    
    <Card sx={{ maxWidth: 345 }} className='card-contaier' >

    <IconCheckboxes onClick={<ActionAlerts/>}/>
      
      <CardMedia
      
        sx={{ height: 140 }}
        image= {image}
        id='media'
        
      />
   
      <CardContent  >
        <div className='cardTitle-contaier'>
        <Typography gutterBottom variant="h5" component="div" className='title-card' >
        {title} 
        </Typography>
        <Typography gutterBottom variant="h5" component="div" >
        {price+"$"}  
        </Typography>
        </div>
        <div className='icon-details'>
        <Typography variant="body2" color="primary.main" id='location-container'>
          <div className='bath-continer' >
          <BathtubIcon className='bath'/> <div className='bathroom'>{bathroom}</div> 
          </div>
         <div className='bed-continer'>
         <BedIcon className='bed' /> <div className='bedroom'>{bedroom}</div> 
         </div>
         <div className='location-contanier'>
         <LocationOnIcon className='loca'/> <div className='location'>{location}</div>
         </div>
           </Typography>
           </div>
          <Typography variant="body2" color="primary.main" className='description-contanier'>
           <div className='description'>{description.slice(0, 60)} </div>    
        
    </Typography>
      </CardContent>
      <CardActions className='learn-contanier'>
      <Link to={`/details/${id}`} className='learn'>See More</Link>
      </CardActions>
    
    </Card>
    
  );
}



