import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';


const Earrings = () => {
    return (
        <div className="carousel">
        <Carousel>
  <Carousel.Item style= {{'height' : "500px"}}>
    <img style= {{'height' : "400px", 'padding' : "10px" , 'justify-Content' : "center"}}
      className="d-block w-600"
      src={require("../assets/img/earrings1.jpeg")} //800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Earrings</h3>
      <p>Buy my Earrings</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
      <img style= {{'height' : "400px"}}
      className="d-block w-600"
      src={require("../assets/img/earrings2.jpeg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style= {{'height' : "500px", 'padding' : "10px" }}>
    <img style= {{'height' : "400px"}}
      className="d-block w-600"
      src={require("../assets/img/earrings3.jpeg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
    )
}

export default Earrings;