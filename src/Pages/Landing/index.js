import { useEffect, useState } from 'react';
import { CssBaseline, Container, Paper, Typography , Cards,  CardContent, CardMedia , Box} from '@mui/material';
import './style.css';   
// import backgroundImage from '../../img/hero (2).png'; 
import imgabout from '../../img/about.jpg'
import imgabout1 from '../../img/about1.png'
import imgabout2 from '../../img/about2.png'
import imgabout3 from '../../img/about3.png'
import imgabout4 from '../../img/about4.png'
import Types from '../../Components/Typography'
import ImgMediaCard from '../../Components/Cards'
import CustomizedInputBase from '../../Components/serch-input';
import CardContainer from '../../Components/CardContainer';


const Landing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch('https://my-json-server.typicode.com/MennatullahAsh/mockApi/house')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('ERROR', error));
  }, []);
  return (
      <>
          <Typography variant="h4" align="center" gutterBottom style={
              {paddingTop:'30px',
              fontWeight:'bold'
          }
          }>
              Best Seller House
          </Typography>
{console.log(data, 'houses')}
      <CardContainer houses={data}/>
      </>
  );
}







function hero() {
    return (
    <>
  <div className="hero">
  <CssBaseline />
  <Container className='cont'>
  <Types/>
  <CustomizedInputBase/>
  </Container>
  
</div>



      <Typography variant="h3" gutterBottom className='about-title'>
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
            Searching for homes for everyone who is looking for their dream home.
            We offer a comprehensive platform that combines advanced search and detailed
            information for homes in various regions.
      </Typography>
      </div>
           <img src={imgabout} className='imgabout'/>
        </div>
     


        <div className='container-img-about'>
            <div className='imgabout1' >
            <img src={imgabout1} className='img' />
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
    


    <div className='contaier-card' >
    <Typography variant="h4" gutterBottom  className='title-new-home'>
      New homes collection     
       </Typography>
    <ImgMediaCard/>
    </div>
      
   
    </>
        
        )
       
}
export default hero  ;