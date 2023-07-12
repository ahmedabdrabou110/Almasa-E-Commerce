import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from "../../assets/carousel1.jpg"
const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome