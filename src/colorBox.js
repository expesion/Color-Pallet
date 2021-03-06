import React from "react";
import "./ColorBox.css";
function colorBox({ background, name }) {
  return (
    <div style={{ background }} className="ColorBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">More</span>
    </div>
  );
}

export default colorBox;
