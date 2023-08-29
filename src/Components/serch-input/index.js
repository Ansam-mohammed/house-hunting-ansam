import * as React from 'react';
import Button from '@mui/material/Button';
import Filter from '../../Pages/filtter'
import { Link } from 'react-router-dom';
import './style.css'


export default function DisableElevation() {
  return (
    <Link to="/Filter" className='search-input-herooo'>
        <Button id='search-heeroo'>
          Search
        </Button>
      </Link>
    
  );
}