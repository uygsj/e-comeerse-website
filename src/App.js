import React, { useState, useContext } from 'react';
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
import { productsList } from './Product/Store';
import { AuthContextProvider } from './Store/AuthContext';
import AuthContext from './Store/AuthContext';

const App = () => {
  const authCtx = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!authCtx.token);

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

            <Route path="/store" element={<Store />} />
  <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/product/:storeId" element={<ProductDetail products={productsList} />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;
