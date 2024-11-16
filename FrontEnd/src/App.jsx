import { useState } from "react";
import Home from "./Pages/home";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./Pages/catalogue";
import Collection from "./Pages/collection";
import Contact from "./Pages/contact";
import About from "./Pages/about";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Product from "./Pages/product";
import Orders from "./Pages/orders";
import Faq from "./Pages/faq";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
