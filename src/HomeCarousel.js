import React from "react";
import { Carousel } from "react-bootstrap";

class HomeCarousel extends React.Component {
  render() {
    return (
      <Carousel id="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Images-and-videos/pic6.png")}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Images-and-videos/pic7.png")}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Images-and-videos/pic8.png")}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default HomeCarousel;
