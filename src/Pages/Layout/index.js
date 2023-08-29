import React from 'react';
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer';
import './style.css'
const Layout = ({children})=> {
return <>
<NavBar/>
 {children}
 <Footer />
</>
}
export default Layout