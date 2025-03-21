import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbars from './Components/Navbars';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Biscuit from './Products/Biscuit';
import Chocolate from './Products/Chocolate';
import Nuts from './Products/Nuts';
import Chips from './Products/Chips';
import Home from './Components/Home';
import ShowProduct from './Components/Showproduct';
import { CartProvider } from './Components/CartContext';
import LoginForm from './Components/Login';
import SignUpForm from './Components/Signup';

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbars />
      <Routes>
     
      <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/showproduct/:id" element={<ShowProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Biscuit" element={<Biscuit />} />
        <Route path="/Chocolate" element={<Chocolate />} />
        <Route path="/Nuts" element={<Nuts />} />
        <Route path="/Chips" element={<Chips />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Signup" element={<SignUpForm />} />

      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
