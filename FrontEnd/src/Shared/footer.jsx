import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <div className="newsletter-section">
          <h3>Stay Updated on Latest Product Releases</h3>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Pages</h4>
            <ul>
              <li>About Us</li>
              <li>Categories</li>
              <li>Catalogue</li>
              <li>Testimonials</li>
              <li>Articles & Blogs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Product</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-brand">
        <img
          src="../src/assets/images/Wrapper.png"
          alt="Uptech Logo"
          className="footer-logo"
        />
      </div>
    </div>
  );
}

export default Footer;
