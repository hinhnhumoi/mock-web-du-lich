import React from 'react'
import '../assets/css/style-liberty.css'

const divStyle = {
    margin: '8px auto',
    display: 'block',
    textAlign: 'center'
};

const BottomGrid = () => {

    return (
        <section className="w3l-bottom-grids-6">
            <div className="bottom-grids-info py-5">
                <div className="container py-lg-5">
                    <div style={divStyle}></div>
                    <div className="row bottomnhy-grids">
                        <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
                            <div className="about-gd-inn">
                                <span className="fa fa-globe icon-fea1" aria-hidden="true"></span>
                                <h5><a href="about.html">Voyages & Cruises</a></h5>
                                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>

                            </div>y
                        </div>
                        <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
                            <div className="about-gd-inn">
                                <span className="fa fa-hotel icon-fea1" aria-hidden="true"></span>
                                <h5><a href="about.html">Hotel Bookings</a></h5>
                                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
                            <div className="about-gd-inn">
                                <span className="fa fa-plane icon-fea1" aria-hidden="true"></span>
                                <h5><a href="about.html">Air Tickets</a></h5>
                                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 about-gd mt-lg-0 mt-3">
                            <div className="about-gd-inn">
                                <span className="fa fa-file-text-o icon-fea1" aria-hidden="true"></span>
                                <h5><a href="about.html">Visas</a></h5>
                                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                            </div>
                        </div>
                    </div>
                    <div style={divStyle}></div>
                </div>
            </div>
        </section>
    )
}

export default BottomGrid