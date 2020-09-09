import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';


const Earrings = () => {
    return (
        <div className="carousel">
        <Carousel>
  <Carousel.Item style= {{'height' : "500px"}}>
    <img style= {{'height' : "500px", 'padding' : "10px" , 'justify-Content' : "center"}}
      className="d-block w-100"
      src={require("../assets/img/earrings1.jpeg")} //800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Earrings</h3>
      <p>$89.99</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
      <img style= {{'height' : "500px"}}
      className="d-block w-100"
      src={require("../assets/img/earrings2.jpeg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>By</h3>
      <p>Erica</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
    <img style= {{'height' : "500px"}}
      className="d-block w-100"
      src={require("../assets/img/earrings3.jpeg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>By</h3>
      <p>Erica</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
    )
}

export default Earrings;