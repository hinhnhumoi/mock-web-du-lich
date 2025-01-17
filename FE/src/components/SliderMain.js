import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'

import slider1 from '../assets/images/tour-khach-doan-du-lich-viet(1).jpg'
import slider2 from '../assets/images/combo-quy-nhon-du-lich-viet-2.jpg'
import slider3 from '../assets/images/du-lich-tay-ninh-du-lich-viet.jpg'

const SliderMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="w3l-banner-slider-main">
      <div className="banner-content">
        <div className="owl-carousel owl-theme owl-loaded owl-drag">
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default SliderMain