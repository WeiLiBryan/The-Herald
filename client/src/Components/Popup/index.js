import React from "react";
import "./popup.css";
import { Card } from 'react-bootstrap';

function Popup(props) {
  return (
    // <div className="container">
    //   <a href={props.link}><h3>{props.title}</h3></a>
    //   <ul className="news">
    //     <li>
    //       <strong>Content:</strong> {props.content}
    //     </li>
    //     <li>
    //       <strong>Description:</strong> {props.description}
    //     </li>
    //     <li>
    //       <strong>Author:</strong> {props.author}
    //     </li>
    //   </ul>
    // </div>
    
    <a href={props.url} target="_blank" rel="noreferrer">
      <div className="container-div">
        <Card className="bg-dark text-white">
          <Card.Img src={props.image ? props.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4XS9WxfgNvETnRb2FpJYq1mLc8K9GRJU_w&usqp=CAU"}
            alt="Card image"
          />
          <Card.ImgOverlay className="opacity-.25">
            <Card.Title><span className="title">{props.title}</span></Card.Title>
            <Card.Text >
              <span className="desc">{props.description}</span>
            </Card.Text>
            <Card.Text><span className="desc">By: {props.author}</span></Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </a>   
  );
}

export default Popup;
