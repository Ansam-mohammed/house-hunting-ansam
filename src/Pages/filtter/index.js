import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { TextField,Slider,Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContainer from '../../Components/CardContainer';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import './style.css'

const HeroSearch =()=>{


  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState();
  const [bathroom, setBathroom] = useState();
  const [selectedType, setSelectedType] = useState('');
  const [price , setPrice] = useState();
  const [housesData, setHousesData] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  
  const handleChange = (event) => {
    setLocation(event.target.value);
  };




      useEffect(() => {
      fetchData();
         }, []);



      const fetchData = async () => {
       
         try {
          const response = await fetch('https://my-json-server.typicode.com/ansam-mohammed/api/houses');
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setHousesData(data);
         
      } catch (error) {
          console.error('Error fetching data:', error);
         
      }

   

    

  

   
  };
  const handleSearch = (event) => {
      event.preventDefault();
      const filteredHouses = housesData.filter((house) =>
          (bedroom === undefined || house.bedroom === +bedroom))
          .filter((house) => (bathroom === undefined || house.bathroom === +bathroom))
          .filter((house) => (price === undefined || house.price === +price))
          .filter((house) => (location === '' || house.location.toLowerCase().includes(location.toLowerCase())));
      setFilteredHouses(filteredHouses);
  };
  const handleResetFilter = () => {
      setLocation('');
      setBedroom('');
      setBathroom('');
      setPrice('')
      setFilteredHouses([]);
  };
  const handleBedroomChange = (event) => {
      setBedroom(event.target.value);
  };
  const handleBathroomChange = (event) => {
      setBathroom(event.target.value);
  };
  const handlePriceChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPrice(newValue)
};
const handleLocationChange = (event) => {
    setLocation(event.target.value)
};




        
        return(
          <>
         <Box sx={{ 
            width: '100%',
            marginTop: '30px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'50px'
          }}>
           <FormControl style={{
            width:'750px'
           }}>
        <InputLabel id="demo-simple-select-label">location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="location"
          onChange={handleLocationChange}
        >
          <MenuItem value={'Gaza'}>Gaza</MenuItem>
          <MenuItem value={'DeirAlBalah'}>Deir al-Balah</MenuItem>
          <MenuItem value={'Rafah'}>Rafah</MenuItem>
          <MenuItem value={'BeitHanoun'}>Beit Hanoun</MenuItem>
          <MenuItem value={'KhanYounes'}>Khan Younes</MenuItem>
          <MenuItem value={'Jabalia'}>Jabalia</MenuItem>
        </Select>
      </FormControl>
    </Box>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px',marginTop:'20px' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bedroom'
                        value={bedroom}
                        name="bedroom"
                        type='number'
                        onChange={handleBedroomChange}
                        displayEmpty
                    />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bathroom'
                        value={bathroom}
                        name="bathroom"
                        type='number'
                        onChange={handleBathroomChange}
                        displayEmpty
                    />
                </FormControl>


                


                <FormControl sx={{ marginLeft: '20px' }}>
                <FormLabel style={{color: '#30394F'}}>Price</FormLabel>
        

         <Slider style={{
           color:'#ff7048',
           width:'180px'
         }}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-label="range-slider"
        value={price}
        step={1000}
        min={2000}
        max={6000}
        variant="outlined"
      />   

      </FormControl>


            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
               
            }}>
         < div className='search-filter-all'>

              <Button 
                    id='sss'
                    variant="contained"
                    onClick={handleSearch}
                  
                >
                Search
                
                    </Button> 
                    <div id='bton-container'>
                 <Button className='button-filter'>
                 <Link to='/' id='btn-back-filter'> Back To Home</Link>
                 </Button>
             </div> 
             </div>
             </div>
            <div>
      
               <CardContainer houses={filteredHouses} />
            </div>
  






          </>
        )


}


export default HeroSearch;