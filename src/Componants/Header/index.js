
import React, { useState } from "react";

import ArrowImage from "./Image/arrow.png";
import "./style.css"; // Make sure this CSS file exists and contains the required styles

const Header = ({handleTextClick, addDraggableText, addDraggableImage, handleSaved}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilterDropdown, setshowFilterDropdown] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);


  const handleNewContentClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMetricClick = () => {
    setSelectedContent('Metric');
    handleTextClick();
    setShowDropdown(!showDropdown);
    // Additional logic for Metric button can be added here
  };

  const handledropDown = ()=>{
    handleTextClick();
    addDraggableText();
    setShowDropdown(!showDropdown);
  }

  const metrics = [
    { id: 1, label: 'Bookings'},
    { id: 2, label: 'Company-wide KPIs' },
    { id: 3, label: 'Reveune' },
    { id: 4, label: 'Sales Rep Performance' },
    { id: 5, label: 'HeadsCount' },
    { id: 6, label: 'Performance' },
    // ... Add the rest of your metrics here
  ];


  const showFilterItem = ()=>{
    setshowFilterDropdown(!showFilterDropdown);
    // setSelectedContent('');
    // setshowFilterDropdown(!showFilterDropdown)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMetrics = metrics.filter(metric =>
    metric.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFilter = ()=>{
    addDraggableImage();
    setshowFilterDropdown(!showFilterDropdown);
    setSelectedContent('');
  }

  const toggleDropdown = () => setIsOpen(!isOpen);


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

      {selectedContent === 'Metric' ? (
        <div className="matic-button-box">
        <button className="metric-btn">Metric</button>
        <button className="metric-button">#ARR</button>
        <button className="metric-button" onClick={()=>showFilterItem()}>Filters</button>
        </div> 
      ) : (<button className="new-contentbtn" onClick={handleNewContentClick}>+ New Content</button>)}
        
        {showFilterDropdown && (
            <div className="metric-library">
            <div className="search-bar">
              <input type="text" placeholder="Search Metric Library"  onChange={handleSearchChange}
              value={searchTerm} />
              <button className="new-button">New</button>
            </div>
            <ul className="metrics-list">
              {filteredMetrics.map(metric => (
                <li key={metric.id} className="metric-item" onClick={()=>handleFilter()}>
                  {/* <span className="metric-icon">{metric.icon}</span> */}
                  <span className="metric-label">{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showDropdown && (
          <div className="dropdown-menu-first">
            <div className="dropdown-item" onClick={handleMetricClick}>Metric</div>
            <div className="dropdown-item" onClick={()=>handledropDown()}>Text</div>
            <div className="dropdown-item">Image</div>
          </div>
        )}
      </div>

      <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ...
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <i className="icon-folder">📁</i> View G. Folder
          </li>
          <li className="dropdown-item" onClick={()=>handleSaved()}>
            <i className="icon-publish">🅰️</i> Publish Now
          </li>
        </ul>
      )}
    </div>
      
     
    </div>
  );
};

export default Header;

