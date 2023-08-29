import React,{useState,useEffect} from 'react';
import Layout from '../../Pages/Layout';
import { useParams } from 'react-router-dom';
import imgdetails from '../../img/img-details.jpg'
import imgdetails1 from '../../img/img-details1.jpg'
import imgdetails2 from '../../img/img-details2.jpg'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import './style.css'


function Detail(){
const {id} = useParams();
const[houses , setHouse] = useState([]);
useEffect(() => {
fetch(`https://my-json-server.typicode.com/ansam-mohammed/api/houses/${id}`)
 .then((response) => response.json())
 .then((data) => {
   setHouse(data);
   console.log(data, 'ddd');
 })
 .catch((error) => {
   console.error("There was a problem with the fetch operation:", error);
 });
}, [id]); 

    return(
       <>


  
<div className='details-container'>
  <div className='img-container'>
    <div className='img-left-container'>
      <img src={houses.image} alt='' className='img-left' />
    </div>
    <div className='img-right'>
      <img src={imgdetails} className='img' />
      <img src={imgdetails2} className='img' />
    </div>
  </div>
  <div className='title-details'>
    <div id='title'>{houses.title}</div>  
    <div id='price'>{houses.price + "$"}</div> 
  </div>
  <div className='infomation-container'>
     <div>{"bathroom:  "+houses.bathroom} </div>
     <div>{"bedroom:  "+houses.bedroom } </div>
     <div>{"location:  "+houses.location} </div>
  </div> 
  <div id='description'>{houses.description }</div>

  <div className='infomation-user'>
    <div className='informatiom'><PersonIcon className='icon-infomation' />  Ansam mohammed</div> 
    <div className='informatiom'><LocalPhoneIcon  className='icon-infomation'/> +972597582153</div> 
    <div className='informatiom'><EmailIcon  className='icon-infomation'/> Ansamm.9099@gmail.com</div> 
  
  </div>
  <div className='btn-container'>
   
           <Link to='/' className='backLink'>
         Back
          </Link>
       </div>
 
     </div>

       </>
    );
}
export default Detail;









