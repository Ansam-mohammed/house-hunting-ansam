import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'; 
import {Link} from 'react-router-dom'
import './style.css'

function Profile() {
 
    return (
     <>
     <div className="root-Profile" > 
         <div className="profile-container">
           <div  id="avatar-prfile" >  </div>
           <div className="name-pro"> Ansam Mohammed </div>

           <did > 
           <ButtonGroup variant="contained" aria-label="outlined primary button group" id="btn-groub">
           <Link to={'/Profile'}> <Button className="btn-pro" id="ptn1"> My profile</Button></Link>  
        <Link to={'/AddHouse'}> <Button className="btn-pro" id="ptn2" > Add new house</Button></Link>
           </ButtonGroup>   
           </did>
           <div className="User">  User Information </div>
         <div id="conatiner-profile-user">
           <div id="profile-user">
            <div className="usre-left"> 
              <div className="use">  User name : </div> 
              <div className="use"> Email : </div>
              <div className="use">  Password : </div>
            </div>
            <div className="usre-right"> 
            <div className="info">  Ansam Mohammed </div>
            <div className="info"> Ansam.1999@gmail.com</div>
            <div className="info">  *********** </div>

            </div>
            
            </div>
           </div>
         </div>
         <div className="mmm">
         <div id='btonn-container'>
                 <Button className='button-profile'>
                 <Link to='/' id='btn-back-profile'> Back To Home</Link>
                 </Button>
             </div> 
             </div>
         </div>
      </>
      
      );
    }




export default Profile ;