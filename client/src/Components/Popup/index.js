import React from "react";
import "./popup.css";

function PopupDiv(props) {
    console.log(props.title);
    return (
        <div>
            <h3>{props.title}</h3>
            <ul className="news">
                <li><span className="label">Content: </span> {props.content}</li>
                <li><span className="label">Description: </span> {props.description}</li>
                <li><span className="label">Author: </span> {props.author}</li>
            </ul>
        </div>
    );
}

export default PopupDiv;