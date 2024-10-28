import React from "react";
import "../styling/ShopByCategory.css";

function ShopByCategory() {
  return (
    <div className="category-section">
      <div className="category-header">
        <h2 className="category-title">Shop by category</h2>
        <div className="category-navigation">
          <div>
            <div className="arrow arrow-left">
              <button className="nav-btn white">
                <img src="../src/assets/images/ArrowLeft.svg" />
              </button>
            </div>
          </div>
          <div>
            <div className="arrow arrow-right">
              <button className="nav-btn red">
                <img src="../src/assets/images/ArrowRight.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="category-list">
        <div className="category-item">
          <img
            src="../src/assets/images/Rectangle2.png"
            alt="Audio"
            className="category-image"
          />
          <div className="category-label">Audio</div>
        </div>
        <div className="category-item">
          <img
            src="../src/assets/images/Rectangle4.png"
            alt="Screens"
            className="category-image"
          />
          <div className="category-label">Screens</div>
        </div>
        <div className="category-item">
          <img
            src="../src/assets/images/Rectangle3.png"
            alt="Camera"
            className="category-image"
          />
          <div className="category-label">Camera</div>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
