import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../assets/css/style-liberty.css'

// import g1 from '../assets/images/g1.jpg'
// import g2 from '../assets/images/g2.jpg'
// import g3 from '../assets/images/g3.jpg'
import { Outlet } from "react-router-dom";
import SlickItem from './SlickItem';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgrey" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgrey" }}
            onClick={onClick}
        />
    );
}

const Slick = ({ title, tours }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section className="w3l-gallery-6">
            <div className="gallery-content-6 py-5">
                <div className="container py-lg-5">
                    <div className="title-content mb-lg-5 mb-4">
                        <span className="sub-title">Hot Tours</span>
                        <h3 className="hny-title">{title}</h3>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {
                                tours.map((item, _) => {
                                    return <SlickItem key={item.id} tour={item} />
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <Outlet />
        </section>
    )
}

export default Slick