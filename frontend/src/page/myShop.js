import React, {useState} from "react";
import CustomAppBar from "../components/appBar";
import { Box, Button, Grid } from "@mui/material";
import ProductCard from "../components/productCard";
import ProductList from "../utils/productList";
import AboutUs from "../components/aboutUs";

const CATEGORIES = ['All', 'Vegetables', 'Fruits', 'Meat', 'Rice', 'Spice'];

const HorizontalMenu = ({ selectedCategory, onSelectCategory }) => {
     return (
      <Box class="bar"
        sx={{  position: 'fixed',  left: 0,  top: 0, width: '100%',
          backgroundColor: "white", border: '1px solid red', display: 'flex', flexDirection: 'row', padding: '10px', mt: '64px', justifyContent: 'space-around', zIndex: 1,}}  >
        {CATEGORIES.map((item) => (
          <Button key={item} onClick={() => onSelectCategory(item)}
            sx={{ color: "red", fontWeight: 'bold',
              textDecoration: selectedCategory === item ? 'underline' : 'none',  }} > {item} </Button>
        ))}
      </Box>
    );
  };

const MainContent = ({ selectedCategory }) => {
  const products = selectedCategory === 'All'
    ? ProductList
    : ProductList.filter((product) => product.type === selectedCategory.toLowerCase());
  
  return (
    <Box sx={{ display: 'flex', ml: '2px', padding: 3, }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
        <br />
        <br />
        <h2>{selectedCategory}</h2>
        <Grid container spacing={3} justifyContent={"space-around"} alignItems="center">
          {products.map((product) => (
            <Grid item xs={6} md={4} key={product.id} sx={{ mb: 2 }}>
              <ProductCard id={product.id} productName={product.name} productDescription={product.description} unit={product.unit} image={product.image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};


const MyShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
return(
<>
  <CustomAppBar/>
      <br />
      <br />
      <br />
      <HorizontalMenu selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <MainContent selectedCategory={selectedCategory} />
      <AboutUs />
</>
)}

export default MyShop