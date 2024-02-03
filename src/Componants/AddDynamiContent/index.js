import React, { useState } from "react";
import Draggable from "react-draggable";
import "./style.css";
import ChartImage from "../Image/ChartView.jpg";
import Header from "../Header";

const ToolbarComponent = ({ handleTextClick, handleSaved }) => {
  const [draggables, setDraggables] = useState([]);

  const addDraggableText = () => {
    const newText = {
      id: Date.now(),
      type: "text", // Type to differentiate between text and image
      content: "",
      size: { width: 300, height: 150 },
    };
    setDraggables([...draggables, newText]);
  };

  const addDraggableImage = () => {
    const newImage = {
      id: Date.now(),
      type: "image", // Type to differentiate between text and image
      src: ChartImage,
      size: { width: 150, height: 150 },
    };
    setDraggables([...draggables, newImage]);
  };

  const updateText = (id, newText) => {
    const updatedDraggables = draggables.map((draggable) =>
      draggable.id === id ? { ...draggable, text: newText } : draggable
    );
    setDraggables(updatedDraggables);
  };

  const startResizing = (id, mouseDownEvent) => {
    mouseDownEvent.preventDefault();

    const doResize = (mouseMoveEvent) => {
      const index = draggables.findIndex((draggable) => draggable.id === id);
      if (index === -1) return;

      // Calculate new size
      const dx = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const dy = mouseMoveEvent.clientY - mouseDownEvent.clientY;

      const newSize = {
        width: Math.max(100, draggables[index].size.width + dx), // Minimum size constraints
        height: Math.max(50, draggables[index].size.height + dy),
      };

      // Update size for only the targeted draggable
      setDraggables((current) =>
        current.map((draggable) =>
          draggable.id === id ? { ...draggable, size: newSize } : draggable
        )
      );
    };

    const stopResizing = () => {
      window.removeEventListener("mousemove", doResize);
      window.removeEventListener("mouseup", stopResizing);
    };

    window.addEventListener("mousemove", doResize);
    window.addEventListener("mouseup", stopResizing);
  };

  const handleMouseEnter = (id) => {
    // Update hover state
    const updatedDraggables = draggables.map((draggable) =>
      draggable.id === id ? { ...draggable, isHovering: true } : draggable
    );
    setDraggables(updatedDraggables);
  };

  const handleMouseLeave = (id) => {
    // Update hover state
    const updatedDraggables = draggables.map((draggable) =>
      draggable.id === id ? { ...draggable, isHovering: false } : draggable
    );
    setDraggables(updatedDraggables);
  };

  const deleteDraggable = (id) => {
    // Filter out the draggable to be deleted
    const updatedDraggables = draggables.filter(
      (draggable) => draggable.id !== id
    );
    setDraggables(updatedDraggables);
  };

  return (
    <>
      <Header
        handleTextClick={handleTextClick}
        addDraggableText={addDraggableText}
        addDraggableImage={addDraggableImage}
        handleSaved={handleSaved}
      />
      <div className="toolbar-container">
        <div className="toolbar-title">
          $0.3m ARR gap to close in Q3 in order to hit Q3 Board target
        </div>

        {draggables.map((draggable) => (
          <Draggable key={draggable.id}>
            <div
              style={{
                width: draggable.size.width,
                height: draggable.size.height,
                position: "relative",
                margin: "10px 0",
                border: "1px solid black",
                borderRadius: "4px",
              }}
              onMouseEnter={() => handleMouseEnter(draggable.id)}
              onMouseLeave={() => handleMouseLeave(draggable.id)}
            >
              {draggable.type === "text" ? (
                <textarea
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "10px",
                    boxSizing: "border-box",
                    resize: "none",
                    border: "1px solid black",
                    borderRadius: "4px",
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                  }}
                  value={draggable.text}
                  onChange={(e) => updateText(draggable.id, e.target.value)}
                />
              ) : (
                <img
                  src={draggable.src}
                  alt="Draggable"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}

              {draggable.isHovering && (
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteDraggable(draggable.id)}
                >
                  &#x2715; {/* Cross icon */}
                </div>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  background: "#CCC",
                  width: "20px",
                  height: "20px",
                  cursor: "nwse-resize",
                }}
                onMouseDown={(e) => startResizing(draggable.id, e)}
              ></div>
            </div>
          </Draggable>
        ))}
      </div>
    </>
  );
};

export default ToolbarComponent;
