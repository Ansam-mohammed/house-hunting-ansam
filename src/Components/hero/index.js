import React from 'react';
import { CssBaseline, Container, Paper, Typography , Box ,ImgMediaCard} from '@mui/material';
import Types from '../../Components/Typography'
import DisableElevation from '../../Components/serch-input';





function hero() {
 
    return (
    <>
  <div className="hero">
  <CssBaseline />
  <Container className='cont'>
  <Types/>
  <DisableElevation className='sssss' />
  </Container>
</div>  
   
    </>
        
        )
       
}

export default hero  ;