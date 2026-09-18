import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AdminRoute from './components/AdminRoute';
import Login from './page/login';
import SignUp from './page/signUp';
import Profile from './page/profile';
import Category from './page/category';
import MyShop from './page/myShop';
import ProductDetails from './page/productDetails';
import ProductList from './utils/productList';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AdminProducts from './admin/AdminProducts';
import AdminUsers from './admin/AdminUsers';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
