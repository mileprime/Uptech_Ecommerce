import React from "react";
import Header from "../Shared/header";
import Footer from "../Shared/footer";
import { children } from "react";

function CustomPage({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default CustomPage;
