import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../assets/css/style-liberty.css'

import g1 from '../assets/images/g1.jpg'
import g2 from '../assets/images/g2.jpg'
import g3 from '../assets/images/g3.jpg'
import { Link, Outlet } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgrey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "lightgrey" }}
            onClick={onClick}
        />
    );
}

const Slick = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="w3l-gallery-6">
            <div className="gallery-content-6 py-5">
                <div className="container py-lg-5">
                    <div className="title-content mb-lg-5 mb-4">
                        <span className="sub-title">Hot Tours</span>
                        <h3 className="hny-title">Du lich noi tieng</h3>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <div className="content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <Link to="/details"><img src={g1} className="img img-fluid" alt="" /></Link>
                                </div>
                                <div className="gal-slide-info">

                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>

                                </div>
                            </div>
                            <div className="content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <Link to="/details"><img src={g2} className="img img-fluid" alt="" /></Link>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Paris</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>

                                </div>
                            </div>
                            <div className="content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src={g3} className="img img-fluid" alt="" /></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Paris</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>

                                </div>
                            </div>
                            <div className="content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src={g1} className="img img-fluid" alt="" /></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Paris</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>

                                </div>
                            </div>
                            <div className="content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src={g2} className="img img-fluid" alt="" /></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Paris</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>

                                </div>
                            </div>
                            <div className="content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src={g3} className="img img-fluid" alt="" /></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Paris</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <Outlet />
        </section>
    )
}

export default Slick