import React from "react";
import { useParams } from "react-router-dom";
import { Container, CardMedia, Card, Typography, Button } from "@mui/material";
import productList from "../utils/productList";
import CustomAppBar from "../components/appBar";
import AboutUs from "../components/aboutus";

const Details = ({ product }) => {
  return (
    <Container
      sx={{ }}
    >
      
      <Card sx={{mt: 5}}>
        <CardMedia component="img" image={product.image} alt={product.name} sx={{ height: 400 }} />
      </Card>
      <br />
      <Typography gutterBottom variant="h3" component="div">
        {product.name}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        <br />
        Description: {product.description}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Price: {product.unit}
      </Typography>
      <br />
      <Button size="small" sx={{ border: "2px solid red", color: "red", fontWeight: "bold", mr: 9 }}>
        Add to Cart
      </Button>
    </Container>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  console.log("Product ID from URL:", id); // Debugging

  const product = productList.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Typography variant="h4">Product not found</Typography>;
  }

  return (
    <>
      <CustomAppBar />
      <br />
      <br />
      <Details product={product} />
      <AboutUs />
    </>
  );
};

export default ProductDetails;
