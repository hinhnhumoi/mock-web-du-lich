import React from 'react'
import '../assets/css/style-liberty.css'

const Gallery = () => {
    return (
        <>
            <section className="w3l-gallery-6">

                <div className="gallery-content-6 py-5">
                    <div className="container py-lg-5">
                        <div className="title-content mb-lg-5 mb-4">
                            <span className="sub-title">Hot Tours</span>
                            <h3 className="hny-title">Popular Packages</h3>
                        </div>
                        <div className="gallery-grids">
                            <div className="col-lg-4 col-md-6 content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src={require("../web - Copy/assets/images/g1.jpg").default} className="img img-fluid" alt=""/></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Paris</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$750</span></h6>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src="assets/images/g2.jpg" className="img img-fluid" alt=""></img></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Bankok</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">2Days, 3 Nights Start From <span>$650</span></h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src="assets/images/g3.jpg" className="img img-fluid" alt=""></img></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Maldives</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">2Days, 3 Nights Start From <span>$550</span></h6>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src="assets/images/g4.jpg" className="img img-fluid" alt=""></img></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Greece</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$950</span></h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src="assets/images/g5.jpg" className="img img-fluid" alt=""></img></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">London</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">2Days, 3 Nights Start From <span>$550</span></h6>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 content-left-sec gal-slide-grid">
                                <div className="gal-slide-img">
                                    <a href="index.html"><img src="assets/images/g6.jpg" className="img img-fluid" alt=""></img></a>
                                </div>
                                <div className="gal-slide-info">

                                    <a href="index.html">
                                        <h4 className="mt-4 mb-0">Julian Alps</h4>
                                    </a>
                                    <h6 className="mt-sm-2 mt-1">3Days, 4 Nights Start From <span>$850</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Gallery