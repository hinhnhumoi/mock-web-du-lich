import React from 'react'
import '../assets/css/style-liberty.css'

const Footer = () => {
    return (
        <footer className="w3l-footer-66">
            <section className="footer-inner-main">
                <div className="footer-hny-grids py-5">
                    <div className="container py-lg-4">
                        <div className="text-txt">
                            <div className="right-side">
                                <div className="row sub-columns">
                                    <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                                        <h2>
                                            <a className="navbar-brand" href="index.html">
                                                <span className="fa fa-globe" aria-hidden="true"></span>ThanhTungtour
                                            </a>
                                        </h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                                            voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.
                                        </p>
                                        <div className="columns-2">
                                            <ul className="social">
                                                <li><a href="/home"><span className="fa fa-facebook" aria-hidden="true"></span>&nbsp;</a>
                                                </li>
                                                <li><a href="/home"><span className="fa fa-linkedin" aria-hidden="true"></span>&nbsp;</a>
                                                </li>
                                                <li><a href="/home"><span className="fa fa-twitter" aria-hidden="true"></span>&nbsp;</a>
                                                </li>
                                                <li><a href="/home"><span className="fa fa-google-plus" aria-hidden="true"></span>&nbsp;</a>
                                                </li>
                                                <li><a href="/home"><span className="fa fa-github" aria-hidden="true"></span>&nbsp;</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 sub-one-left mid-footer-gd">
                                        <div className="sub-two-right">
                                            <h6>Quick links</h6>
                                            <ul>
                                                <li><a href="index.html"><span className="fa fa-angle-double-right mr-2"></span>Home</a>
                                                </li>
                                                <li><a href="about.html"><span className="fa fa-angle-double-right mr-2"></span>About</a>
                                                </li>
                                                <li><a href="services.html"><span className="fa fa-angle-double-right mr-2"></span>Destinations</a>
                                                </li>
                                                <li><a href="contact.html"><span className="fa fa-angle-double-right mr-2"></span>Contact</a></li>
                                            </ul>
                                        </div>
                                        <div className="sub-two-right">
                                            <h6>Help &amp; Support</h6>
                                            <ul>
                                                <li><a href="index.html"><span className="fa fa-angle-double-right mr-2"></span>Live
                                                    Chart</a></li>
                                                <li><a href="faq.html"><span className="fa fa-angle-double-right mr-2"></span>Faq</a>
                                                </li>
                                                <li><a href="/homesupport"><span className="fa fa-angle-double-right mr-2"></span>Support</a></li>
                                                <li><a href="/hometerms"><span className="fa fa-angle-double-right mr-2"></span>Terms
                                                    of Services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer