import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Landing from '../Pages/Landing';
import Details from '../Pages/DetailsHouse';
import {Layout, Landing, NotFound} from '../Pages';
import About from '../Pages/About'
import Detail from '../Pages/DetailsHouse';
import Filter from '../Pages/filtter';
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import AddHouse from '../Pages/profile/AddHouse'
import Profile from '../Pages/profile/myProfile'

function App() {
  return (

    
 <Router>
  <Layout>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/details/:id' element={<Detail/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/Filter' element={<Filter/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/AddHouse' element={<AddHouse/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      </Layout>
    </Router>
  
   
  );
}
export default App;