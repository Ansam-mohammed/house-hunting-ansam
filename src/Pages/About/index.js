import React from 'react';
import { CssBaseline, Container, Paper, Typography , Box ,ImgMediaCard} from '@mui/material';
import imgabout from '../../img/about.jpg'
import imgabout1 from '../../img/about1.png'
import imgabout2 from '../../img/about2.png'
import imgabout3 from '../../img/about3.png'
import imgabout4 from '../../img/about4.png'
import NavBar from '../../Components/NavBar';
import './style.css'

function About() {
 
    return (
    <>

      <Typography variant="h3" gutterBottom id='about-title'>
       About us
      </Typography>
       <div className='about-container'>
        <div className='para-container' >
        <Typography variant="h5" gutterBottom className='suptitle-about'>
         The leading home rental market
         </Typography>
           <Typography variant="subtitle1" gutterBottom className='about-para'>
            Searching for homes for everyone who is looking for their dream home.
            We offer a comprehensive platform that combines advanced search and detailed
            information for homes in various regions.
            Our mission is to simplify the process of finding your dream home. We believe that the search for a house should be exciting, not overwhelming. Our platform offers user-friendly tools and comprehensive information to help you find the ideal property that suits your needs.
           
     
      </Typography>
      </div>
           <img src={imgabout} className='imgabout'/>
        </div>
     


        <div className='container-img-about'>
            <div className='imgabout1' >
            <img src={imgabout1}  />
            <h4>Exceptional lifestyle</h4> 
            </div>
            <div className='imgabout2'>
            <img src={imgabout2} />
            <h4>Beautiful scene around</h4> 
            </div>
            <div className='imgabout3'>
            <img src={imgabout3} />
            <h4>Smart Home Design</h4> 
            </div>
            <div className='imgabout4'>
            <img src={imgabout4} />
            <h4>Complete 24/7 Security</h4> 
            </div>
          </div>
    


  
      
   
    </>
        
        )
       
}

export default About  ;