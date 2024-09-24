import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/login';
import SignUp from './page/signUp';
import Profile from './page/profile';
import Category from './page/category';
import MyShop from './page/myShop';
import ProductDetails from './page/productDetails';
import ProductList from './utils/productList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myShop" element={<MyShop />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
