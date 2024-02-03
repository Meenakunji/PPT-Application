import React from "react";
import "./style.css"; 

const PresentationSelector = ({handleStep, step, savedPresenataion}) => {
  return (
    <div className="presentation-selector-container">
      {savedPresenataion?(<div className="presentation-selector-heading">
      presentation Saved!
      </div>):(<div className="presentation-selector-heading">
        Select presentation template
      </div>)}

      {savedPresenataion?( <div className="presentation-selector-para">
      Let's Start Another Perseantation.
      </div>):( <div className="presentation-selector-para">
        Describe what role the presentation template play in this whole thing.
      </div>)}
      

      <div className="presentation-selector-options">
        <button
          className="presentation-selector-option"
          onClick={() => handleStep(step)}
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
