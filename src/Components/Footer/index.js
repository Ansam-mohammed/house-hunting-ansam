import  React from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../img/logo.png'
import CopyrightIcon from '@mui/icons-material/Copyright';
import './style.css'




function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl" className='AppBar-footer'>
        <Toolbar disableGutters  className='logo-footer-container'>
         
            <div className='logo-footer-container'>
            <img src={logo} alt="Logo" className='logo-footer' />
            </div>
        </Toolbar>
        <div className='copy-container'>
          <div className='one'>
          <div> <CopyrightIcon/></div>
          <div>All Rights Reserved @ Company 2023 </div>
          </div>
       <div className='two'>
        <div className='privicy'>

          <div>Terms & Conditions    </div>
          <div>Privacy & Policy</div>
          </div>
        </div>
        </div>
      
     
      </Container>
    </AppBar>
  );
}
export default NavBar;
