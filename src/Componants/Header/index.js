import React from "react";
import  ArrowImage from "./Image/arrow.png";
import "./style.css"; // Make sure to create this CSS file

const Header = () => {
  // Handle the new content click event if needed
  const handleNewContentClick = () => {
    console.log("New Content clicked");
  };

  return (
    <div className="review-container">
      <div className="review-title">
        <img src={ArrowImage} alt="" className="arrow-icon" />
        <div className="review-status">
          <h5>Weekly Business Review</h5>
          <p>
            Draft <span>Finalizes in 3 days</span>
          </p>
        </div>
      </div>
      <div className="review-action">
        <button onClick={handleNewContentClick}>+ New Content</button>
      </div>
      <div className="three-dot">...</div>
    </div>
  );
};

export default Header;
