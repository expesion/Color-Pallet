import React from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
function Palette(props) {
  return (
    <div className="Palette">
      <div className="Palette-colors">
        {props.palette.colors.map((color) => (
          <ColorBox background={color.color} name={color.name} />
        ))}
      </div>
    </div>
  );
}

export default Palette;
