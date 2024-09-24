import React from "react";
import CustomAppBar from "../components/appBar";
import { Box, Button, Grid } from "@mui/material";
import ProductCard from "../components/productCard";
import ProductList from "../utils/productList";
import AboutUs from "../components/aboutus";



const HorizontalMenu = () => {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  
    return (
      <Box class="bar"
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 2,
          height: '30px',
          width: '1231px', // Menu width
          backgroundColor: "white",
          border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          mt: '64px',
          justifyContent: 'space-between'
        }}
      >
        <Box>
        {['All','Vegetables', 'Fruits', 'Meat', 'Rice', 'Spice',  ].map((item) => (
          <React.Fragment key={item}>
            <Button onClick={() => handleScroll(item.toLowerCase().replace(' ', '-'))} sx={{ color: "red", marginBottom: '15px', mt: 0, fontWeight: 'bold' }}>
              {item}
            </Button>
          </React.Fragment>
        ))}
        </Box>
      </Box>
    );
  };


  const MainContent = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          ml: '2px',
          padding: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <br />
          <br />
          <Box id="vegetables">
            <h2>Vegetables</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', padding: '20px', border: '1px solid red' }}>
            </Box>
          </Box>
          <br />
          <Box id="fruits">
            <h2>Fruits</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', border: '1px solid red', padding: '20px' }}>
            </Box>
          </Box>
          <br />
          <Box id="meat">
            <h2>Meat</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', border: '1px solid red', padding: '20px' }}>
            </Box>
          </Box>
          <br />
          <Box id="rice">
            <h2>Rice</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', border: '1px solid red', padding: '20px' }}>
            </Box>
          </Box>
          <br />
          <Box id="spice">
            <h2>Spice</h2>
            <Box sx={{ flex: 1, backgroundColor: 'white', border: '1px solid red', padding: '20px' }}>
            </Box>
          </Box>
          <br />
        </Box>
      </Box>
    );
  };


const MyShop = () => {

return(
<>
  <CustomAppBar/>
      <br />
      <br />
      <br />
      <HorizontalMenu />
      <MainContent />
      <AboutUs />
</>
)}

export default MyShop