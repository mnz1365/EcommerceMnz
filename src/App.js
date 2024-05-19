import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./componets/Header.js";
import Contact from "./componets/Contact.js";
import Cart from "./componets/Cart.js";
import PageNotFount from "./componets/PageNotFound.js";
import Footer from "./componets/Footer.js";
import HeaderTwo from "./componets/HeaderTwo.js";
import Home from "./componets/Home.js";
import Login from "./componets/Login.js";
import Account from "./componets/Account.js";
import { ProductDetails } from "./componets/ProductDetails.js";
import Confirmation from './componets/Confirmation.jsx';


function App() {
  return (
    <Router>
      <HeaderTwo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/Card" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFount />} />
        <Route path="/account" element={<Account />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
