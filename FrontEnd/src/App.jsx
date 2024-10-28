import { useState } from "react";
import Home from "./Pages/home";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./Pages/catalogue";
import Collection from "./Pages/collection";
import Contact from "./Pages/contact";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
