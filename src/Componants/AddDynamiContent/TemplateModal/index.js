import React from "react";
import "./style.css";

const DynamicContentModal = ({
  selectedOption,
  handleOptionChange,
  handleShowContent,
}) => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-title">
        $0.3m ARR gap to close in Q3 in order to hit Q3 Board target
      </div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            Add Dynamic Content
            <button className="close-button">&times;</button>
          </div>
          <div className="options-container">
            <div className="option">
              <input
                id="metric"
                type="radio"
                name="content-type"
                value="metric"
                checked={selectedOption === "metric"}
                onChange={handleOptionChange}
              />
              <label htmlFor="metric" className="option-label">
                Metric
              </label>
            </div>
            <div className="option">
              <input
                id="commentary"
                type="radio"
                name="content-type"
                value="commentary"
                checked={selectedOption === "commentary"}
                onChange={handleOptionChange}
              />
              <label htmlFor="commentary" className="option-label">
                Commentary
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#help" className="help-link">
              Need help?
            </a>
            <button className="add-content-button" onClick={handleShowContent}>
              Add Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentModal;
