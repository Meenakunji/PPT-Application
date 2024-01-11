import React from "react";
import "./style.css";

const DynamicContentModal = ({
  showContainetModal,
  setshowContainetModal,
  selectedOption,
  handleOptionChange,
  handleShowContent,
}) => {

  if(!showContainetModal){
    return null;
  }

  return (
      <div className="conatinet-conatiner">
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            Add Dynamic Content
            <button className="close-button" onClick={handleShowContent} >&times;</button>
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
