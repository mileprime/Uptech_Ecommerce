import React from "react";
import "../styling/Header.css";

function Header() {
  return (
    <header className="header-container">
      {/* Logo Section */}
      <div className="logo-section">
        <img
          src="../src/assets/images/Subtract.svg"
          alt="Logo"
          className="logo-icon"
        />
        <span className="logo-text">Uptech</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <span>Home</span>
        <span>Catalogue</span>
        <span>Collections</span>
        <span>Popular</span>
        <span>Contact Us</span>
      </nav>

      {/* Action Icons */}
      <div className="action-icons">
        <div className="icon">
          <img
            src="../src/assets/images/Search.svg"
            alt="Cart Icon"
            className="cart-icon"
          />
        </div>
        <div className="icon">
          <div className="profile-icon">
            <img
              src="../src/assets/images/Profile.svg"
              alt="Notification Icon"
              className="notification-bell"
            />
          </div>
        </div>
        <div className="notification">
          <div className="notification-icon">
            <img
              src="../src/assets/images/Bag.svg"
              alt="Notification Icon"
              className="notification-bell"
            />
          </div>
          <div className="notification-badge">
            <div className="badge-dot" />
            <span className="badge-count">0</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
