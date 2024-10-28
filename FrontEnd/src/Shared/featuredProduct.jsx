import React from "react";
import "../styling/FeaturedProduct.css";

function FeaturedProduct() {
  return (
    <div className="featured-product">
      <h2 className="featured-title">Featured Products</h2>
      <div className="product-list">
        {/* Product 1 */}
        <div className="product-card">
          <img
            src="../src/assets/images/Rectangle5.png"
            alt="Wireless Headphone"
            className="product-image"
          />
          <div className="product-info">
            <span className="product-name">Wireless Headphone</span>
            <span className="product-price">$300.00</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <img
            src="./src/assets/images/Rectangle6.png"
            alt="Wireless Keyboard"
            className="product-image"
          />
          <div className="product-info">
            <span className="product-name">Wireless Keyboard</span>
            <span className="product-price">$150.00</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img
            src="./src/assets/images/Rectangle8.png"
            alt="Wireless Mouse"
            className="product-image"
          />
          <div className="product-info">
            <span className="product-name">Wireless Mouse</span>
            <span className="product-price">$100.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedProduct;
