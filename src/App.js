import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import {ProductArr} from './Product/ProductDetail';

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add a route for the login page */}
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productId" element={<ProductDetail products={ProductArr} />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
