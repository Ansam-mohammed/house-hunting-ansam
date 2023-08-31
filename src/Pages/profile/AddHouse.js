import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'; 
import {Link} from 'react-router-dom'
import './style.css'

function AddHouse() {
 
    return (
     <>
     <div className="root-Profile" > 
         <div className="profile-container">
           <div  id="avatar-prfile" >  </div>
           <div className="name-pro"> Ansam Mohammed </div>

           <did > 
           <ButtonGroup variant="contained" aria-label="outlined primary button group" id="btn-groub">
           <Link to={'/Profile'}> <Button className="btn-pro" id="ptn2"> My profile</Button></Link>  
        <Link to={'/AddHouse'}> <Button className="btn-pro" id="ptn1" > Add new house</Button></Link>
           </ButtonGroup>   
           </did>
           <div className="User">   Add new house </div>
         <div id="conatiner-profile-user">
           <div id="profile-user-add">
            <div className="usre-left-add"> 
          <label class="user">Bedroom:<input type="number"/>   </label>
          <label class="user">Bathroom:<input type="number"/></label>
          <label class="user">Price:<input type="range" min={2000} max={6000}/> </label>
          <label class="user">Location: <input type="text"/></label>
          <label class="user">Description:<textarea></textarea></label>
          <label class="user">Add to image<input type="file"/></label>
            <Button id='add-house'> Add to House </Button>
            </div>
            <div  className="usre-right-add"> 
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




export default AddHouse ;