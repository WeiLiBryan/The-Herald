import React from "react";
import "./popup.css";

function Popup(props) {
    return (
        <div style={{
            display: props.display ? "block": "none"
          }}>
            <h3>{props.title}</h3>
            <ul className="news">
                <li><strong>Content:</strong> {props.content}</li>
                <li><strong>Description:</strong> {props.description}</li>
                <li><strong>Author:</strong> {props.author}</li>
            </ul>
        </div>
    );
}

export default Popup;