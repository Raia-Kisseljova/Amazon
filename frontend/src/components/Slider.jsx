import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <div className="relative">
      <Carousel className="custom-slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slide1_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slide2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slide3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
