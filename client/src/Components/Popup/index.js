import React from "react";

function Popup(props) {
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

export default Popup;