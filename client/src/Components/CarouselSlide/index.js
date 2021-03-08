import React from "react";

function CarouselSlide(props) {
    return (
        <div class="carousel-item">
            <img src={props.urlToImage} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5>{props.title}</h5>
                <h6>{props.author}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default CarouselSlide;