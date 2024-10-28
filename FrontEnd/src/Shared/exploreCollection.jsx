import React from "react";
import "../styling/ExploreCollection.css"; // Ensure the path is correct

function ExploreCollection() {
  return (
    <div className="explore-section">
      <div className="explore-header">
        <h2 className="explore-title">Explore Collection</h2>
        <button className="browse-btn">Browse all products</button>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    name: "Wireless Headphone",
    price: "$300.00",
    image: "../src/assets/images/Rectangle5.png",
  },
  {
    name: "Wireless Keyboard",
    price: "$150.00",
    image: "../src/assets/images/Rectangle6.png",
  },
  {
    name: "Wireless Mouse",
    price: "$125.00",
    image: "../src/assets/images/Rectangle8.png",
  },
  {
    name: "Smart Watch",
    price: "$100.00",
    image: "../src/assets/images/Rectangle9.png",
  },
  {
    name: "DSLR Camera",
    price: "$450.00",
    image: "../src/assets/images/Rectangle7.png",
  },
  {
    name: "Earphones",
    price: "$300.00",
    image: "../src/assets/images/Rectangle10.png",
  },
];

export default ExploreCollection;
