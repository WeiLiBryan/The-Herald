import React from "react";
import "./popup.css";

function Popup(props) {
  return (
    <div className="container">
      <a href={props.link}><h3>{props.title}</h3></a>
      <ul className="news">
        <li>
          <strong>Content:</strong> {props.content}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong>Author:</strong> {props.author}
        </li>
      </ul>
    </div>
  );
}

export default Popup;
