import React from "react";
import "../styling/StayUpdated.css";

function StayUpdated() {
  return (
    <div className="stay-updated-section">
      <h2 className="stay-updated-title">
        Stay Updated on Latest Product Releases
      </h2>
      <p className="stay-updated-description">
        Never miss a beat and stay updated with new product arrivals and
        promotions.
      </p>
      <div className="subscription-group">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
          required
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
}

export default StayUpdated;
