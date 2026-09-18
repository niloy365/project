import React from "react";
import ProductCard from "../components/productCard";
import ProductList from "../utils/productList";
import { Grid, imageListClasses} from "@mui/material";
import CustomAppBar from "../components/appBar";
import AboutUs from "../components/aboutus";



const Category = () => {
    return(
        <>
            <CustomAppBar/>
        <br/>
        <br/>
        <br/>
        <h1 style={{ textAlign: 'center', color:"red" }}>Best Sellers</h1>
        <br/>
        <br/>

        <Grid
        
        container 
        spacing={3} 
        justifyContent="space-around" 
        alignItems="center"
        style={{
            paddingLeft: "3%", paddingRight: "3%"
        }}
        
        >

        {ProductList.map(product => {
            return(
                <Grid item xs={6} md={4} sx={{mb:2}}>
                    <ProductCard
                    id={product.id}
                    productName={product.name}
                    productDescription={product.description}
                    unit={product.name}
                    image={product.image}
                    ></ProductCard>
                </Grid>
            )
        })}

        </Grid>
        <AboutUs/>
        </>
    )
}

export default Category