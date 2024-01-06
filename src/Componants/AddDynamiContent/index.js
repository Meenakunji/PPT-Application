import React, { useState } from "react";
import "./style.css"; 

const ToolbarComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div className="toolbar-container">
      <div className="toolbar-title">
        $0.3m ARR gap to close in Q3 in order to hit Q3 Board target
      </div>
      <div className="body-box">
        <div style={{ display: "flex", gap: "13px" }}>
          <input
            type="text"
            className="toolbar-input"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add Dynamic Content"
          />
          <button className="toolbar-button" onClick={handleButtonClick}>
            <span className="button-icon">⚡️</span>{" "}
            {/* Replace with actual icon */}
            Add
          </button>
        </div>
        {displayValue && <div className="display-value">{displayValue}</div>}
      </div>
    </div>
  );
};

export default ToolbarComponent;
