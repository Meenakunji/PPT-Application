import React from "react";
import "./style.css"; 

const PresentationSelector = ({ handleShow }) => {
  return (
    <div className="presentation-selector-container">
      <div className="presentation-selector-heading">
        Select presentation template
      </div>
      <div className="presentation-selector-para">
        Describe what role the presentation template play in this whole thing.
      </div>

      <div className="presentation-selector-options">
        <button
          className="presentation-selector-option"
          onClick={() => handleShow()}
        >
          Start from an existing presentation
        </button>
        <button className="presentation-selector-option">
          Create a new Google Slides presentation
        </button>
      </div>
    </div>
  );
};

export default PresentationSelector;
