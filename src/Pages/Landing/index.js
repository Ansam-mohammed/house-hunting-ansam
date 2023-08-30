import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';   
import CardContainer from '../../Components/CardContainer';
import Hero from '../../Components/hero'
import Layout from '../../Pages/Layout';
import Button from '@mui/material/Button';


const Landing = ()=> {
  
  const[house , setHouse] = useState([])
  const getHouse =  async ()=>{
      try{
   
        const response = await fetch("https://my-json-server.typicode.com/ansam-mohammed/api/houses");
      console.log(response,"res");
      if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      const data = await response.json();
      console.log(data,"data");
        setHouse(data);
      }
      catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
  };
 useEffect(()=>{
  getHouse();
 },[])
  return (
  <>
<Hero/>
{console.log(house, "gg")}
  <h1 className='title-home'>New homes collection</h1>
  <CardContainer  houses={house}/>
  {/* <Layout/> */}


  </>
 )
}
export default Landing