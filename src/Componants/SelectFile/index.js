import React, { useState } from "react";
import "./style.css"; 

const FileSelectorModal = ({ showModal, setShowModal, handleSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileNameArray = [
    "Untitled Presentation",
    "8.29_9.18 2023 Presentation",
    "MIRI Marketecture Presentation",
    "Bench Marketing Presentation",
    "Blind Insight for h Presentation",
    "Miri Wellness plan Presentation",
    "copy of miiror Presentation",
    "hello Mri",
  ];

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFileSelect = (name) => {
    setSelectedFile(name);
  };

  const filteredFiles = searchTerm
    ? fileNameArray.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : fileNameArray;

  if (!showModal) {
    return null;
  }

  return (
    <div className="file-selector-modal-overlay">
      <div className="file-selector-modal">
        <div className="file-selector-header">
          <span>Select a file</span>
          <button className="close-button" onClick={handleCancel}>
            &times;
          </button>
        </div>
        <div className="file-selector-content">
          <div className="file-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="file-grid">
            {filteredFiles.map((name, index) => (
              <div
                className={`file-entry ${
                  selectedFile === name ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleFileSelect(name)}
              >
                <div className="file-thumbnail">{/* Thumbnail image */}</div>
                <div className="file-info">
                  <span className="file-title">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="file-selector-footer">
          <button className="select-button" onClick={handleSelect}>
            Select
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileSelectorModal;
