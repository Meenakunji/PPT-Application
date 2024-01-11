import React, { useState } from "react";
import "./style.css"; 
import Dashboard from "../DataDashboard";

const ToolbarComponent = ({handleShowContainetModal, clickCountArray, showContent, selectedOption }) => {

  const [inputText, setInputText] = useState("");

  const handleButtonClick = () => {
    handleShowContainetModal();
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value); // Update the inputText state with the new value
  };


  return (
    <div className="toolbar-container">
      <div className="toolbar-title">
        $0.3m ARR gap to close in Q3 in order to hit Q3 Board target
      </div>
      <div className="body-box-dash">
      {clickCountArray.map((index)=>(
            <div key={index}>
              <Dashboard showContent={showContent} selectedOption={selectedOption} /> 
            </div>
         ))}
       </div>
        <div className="footer-box">
          {(selectedOption==='commentary')?(
            <input 
              type="text" 
              value={inputText} 
              onChange={handleInputChange} 
              className="text-input"
              placeholder="add comment"
            />):(null)}

          <button className="toolbar-button" onClick={handleButtonClick}>
            <span className="button-icon">⚡️</span>{" "}
            {/* Replace with actual icon */}
            Add
          </button>
        </div>
        {(selectedOption==='commentary')?(<div className="comment-box">
          {inputText}
      </div>):(null)}
      
    </div>
  
  );
};

export default ToolbarComponent;
