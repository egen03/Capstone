import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';


const Bracelet = () => {
    return (
        <div className="carousel">
        <Carousel>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
    <img style= {{'height' : "500px"}}
      className="d-block w-100"
      src={require("../assets/img/bracelet1.jpg")} //800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bracelets</h3>
      <p>$79.99</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
      <img style= {{'height' : "500px"}}
      className="d-block w-100"
      src={require("../assets/img/bracelet2.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>By</h3>
      <p>Ayana</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
    <img style= {{'height' : "500px"}}
      className="d-block w-100"
      src={require("../assets/img/bracelet3.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>By</h3>
      <p>Ayana</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
    )
}

export default Bracelet;