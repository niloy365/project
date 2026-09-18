import React from "react";
import { Link } from "react-router-dom";
import productList from "../utils/productList"; // Ensure this path is correct

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      {productList.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.unit}</p>
          <img src={product.image} alt={product.name} width="200" />
          <br />
          <Link to={`/productDetails/${product.id}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;