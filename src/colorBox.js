import React from 'react'
import "./ColorBox.css";
function colorBox(props) {
    return (
        <div style={{background:props.background}} className="ColorBox">
            <span>{props.name}</span>
            <span>MORE</span>
        </div>
    )
}

export default colorBox
