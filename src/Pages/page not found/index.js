import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import './style.css'

function NotFound() {
 
    return (
     
        <div id='not-found-container'>
     
          <Typography id='text'>
             PAGE NOT FOUND
          </Typography>
          <div id='aa'>
          <Button className='button'>
           <Link to='/' id='btn-back'> Back To Home</Link>
          </Button>
        </div>
        </div>
      );
    }
    export default NotFound;