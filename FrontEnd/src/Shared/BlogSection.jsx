import React from "react";
import "../styling/BlogSection.css";

function BlogSection() {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <h2 className="blog-title">Blogs & Articles</h2>
        <button className="view-all-btn">View all articles</button>
      </div>

      <div className="blog-list">
        <div className="blog-item">
          <img
            src="../src/assets/images/Rectangle163.png"
            alt="Gadget Blog"
            className="blog-image"
          />
          <p className="blog-description">
            Top 10 Must-Have Gadgets of 2024: Available Now at UpTech
          </p>
        </div>

        <div className="blog-item">
          <img
            src="../src/assets/images/Rectangle164.png"
            alt="Shop Revolution"
            className="blog-image"
          />
          <p className="blog-description">
            How UpTech is Revolutionizing the Way You Shop for Technology
          </p>
        </div>

        <div className="blog-item">
          <img
            src="../src/assets/images/Rectangle165.png"
            alt="Tech Investment"
            className="blog-image"
          />
          <p className="blog-description">
            Maximizing Your Tech Investments with UpTech's Premium Selection
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
