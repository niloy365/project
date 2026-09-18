import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';

const ProductCard = ({ id, productName, productDescription, unit, image }) => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={5}
      sx={{ maxWidth: 345, color: '#333333', backgroundColor: '#FFFFFF' }}
    >
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {unit}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ border: '2px solid red', color: 'red', fontWeight: 'bold', mr: 1 }}
        >
          Add to Cart
        </Button>
        <IconButton>
          <FavoriteBorder sx={{ fontSize: 'h4.fontSize', color: 'red', mr: 1 }} />
        </IconButton>
        {/* Pass the product id to the navigate function */}
        <Button
          size="small"
          sx={{ border: '2px solid blue', color: 'blue', fontWeight: 'bold' }}
          onClick={() => navigate(`/productDetails/${id}`)}  // Pass id here
        >
          DETAILS
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
