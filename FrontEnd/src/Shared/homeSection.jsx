// HomeSection.jsx
import React from "react";
import "../styling/homeSection.css";

function HomeSection() {
  return (
    <div className="gradient-box">
      <img
        className="gradient-image"
        src="../src/assets/images/Rectangle1.png"
        alt="Rectangle"
      />
      <div className="overlay-content">
        <div className="main-heading">Redefining Your Tech Experience</div>
        <div className="sub-content">
          <p>
            At UpTech, we're redefining your tech experience by offering the
            latest & most innovative products.
          </p>
          <div className="button-group">
            <button className="primary-btn">Browse Products</button>
            <button className="secondary-btn">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
