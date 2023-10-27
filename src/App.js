import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Cart from './Header/Cart';
import Store from './Product/Store';
import About from './Header/About';
import { CartProvider } from './Store/CartContext';
import Contact from './Header/Contact';
import Home from './Header/Home';
import Movies from './Movies/Movies';
import ProductDetail from './Product/ProductDetail';
import Login from './Header/Login';
import { productsList } from './Product/Store';
import { AuthContextProvider, useAuth } from './Store/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/store" element={<StoreContent />} />
            {/* Use a separate component for the "Store" route, see below. */}

            <Route path="/login" element={<Login />} />
            <Route path="/product/:storeId" element={<ProductDetail products={productsList} />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
};

const StoreContent = () => {
  const authCtx = useAuth();
  const { isLoggedIn } = authCtx;

  return isLoggedIn ? <Store /> : <Navigate to="/login" />;
};

export default App;
