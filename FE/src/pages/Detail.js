import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import TourApi from '../api/TourApi'
import SpaceDiv from '../components/SpaceDiv'
import '../assets/css/style-liberty.css'

import b1 from '../assets/images/b1.jpg'

const detailBoxStyle = {
    color: '#DB162F',
    fontSize: 23
}

const Detail = () => {
    let { id } = useParams();
    const [tourDetail, setTourDetail] = useState({});

    useEffect(() => {
        const response = TourApi.getById(`${id}`);
        response.then(res => setTourDetail(res));
    }, [id]);

    return (
        <>
            <section className="w3l-blog-post-main">
                <div className="blog-content-inf py-5">
                    <div className="container py-lg-5">
                        <SpaceDiv />
                        <div className="strollhny-blog-grids row">
                            <div className="col-lg-8 blog-left-view">
                                <div className="blog-posthny-info">
                                    <div className="single-post-image mb-4">
                                        <div className="post-content">
                                            <span className="sub-title">Travel</span>
                                            <h4 className="text-head-text-9 my-2">
                                                {tourDetail.tenTour}
                                            </h4>
                                        </div>
                                        <ul className="blog-author-date d-flex align-items-center mb-4">

                                            <li>By <a href="#URL">Admin</a></li>
                                            <li>Mar 18, 2020</li>
                                        </ul>
                                        <div className="single-page-img"></div>

                                    </div>

                                    <div className="single-post-content">
                                        <h4 className="side-title ">Lịch trình Tour</h4>
                                        {tourDetail.chuongTrinhTourList ?
                                            tourDetail.chuongTrinhTourList.map((item) => {
                                                return (<p className="mb-4" key={item.id}>{item.moTa}</p>)
                                            }) : <p>loading ....</p>
                                        }
                                        <blockquote className="blockquote my-5">
                                            <div className="icon-quote"><span className="fa fa-quote-left" aria-hidden="true"></span>
                                            </div>
                                            Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                            consectetur.Ea
                                            consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga,
                                            suscipit
                                            totam
                                            animi consequatur saepe blanditiis.
                                            <footer className="blockquote-footer mt-3">
                                                Michael Smith
                                                <cite title="Source Title pl-2">City Name</cite>
                                            </footer>
                                        </blockquote>

                                        <footer className="blog-post-details-footer">
                                            <div className="row">
                                                <div className="col-md-6 text-center text-sm-left">
                                                    <div className="post-tags"><span>Tags: </span><a href="index.html">Travel, </a> <a href="index.html">
                                                        Hotel</a></div>
                                                </div>
                                                <div className="col-md-6 text-center text-sm-right">
                                                    <div className="share-icons mt-sm-20">
                                                        <a href="index.html"><span className="fa fa-facebook"></span></a>
                                                        <a href="index.html"><span className="fa fa-twitter"></span></a>
                                                        <a href="index.html"><span className="fa fa-tumblr"></span></a>
                                                        <a href="index.html"><span className="fa fa-reddit"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>



                                        <div className="row author-card author-listhny my-lg-5 my-4">
                                            <div className="author-left col-sm-2 mb-sm-0 mb-4 pl-0">
                                                <a href="index.html">
                                                    <img className="img-fluid" src="assets/images/t1.jpg" alt=" " />
                                                </a>
                                            </div>
                                            <div className="author-right col-sm-10 pr-lg-0 position-relative">

                                                <h4><a href="index.html" className="title-team-28">Harvard milan</a></h4>
                                                <p className="para-team mb-0">Vivamus a ligula quam. Ut blandit eu leo non
                                                    suscipit.Nulla
                                                    quis lorem
                                                    neque, mattis venenatis lectus. In interdum ullamcorper dolor.Lorem ipsum
                                                    dolor sit amet.</p>

                                                <div className="share-icons mt-4">
                                                    <a href="index.html"><span className="fa fa-facebook"></span></a>
                                                    <a href="index.html"><span className="fa fa-twitter"></span></a>
                                                    <a href="index.html"><span className="fa fa-tumblr"></span></a>
                                                    <a href="index.html"><span className="fa fa-pinterest"></span></a>
                                                    <a href="index.html"><span className="fa fa-google-plus" ></span></a>
                                                    <a href="index.html" className="vk"><span className="fa fa-vk"></span></a>
                                                </div>

                                            </div>
                                        </div>

                                        <nav className="post-navigation row mt-5">
                                            <div className="post-prev col-md-6">
                                                <span className="nav-title">
                                                    Prev Post </span>
                                                <a href="#url" rel="prev">
                                                    <h5>Lorem ipsum dolor sit amet</h5>
                                                </a>
                                            </div>
                                            <div className="post-next col-md-6 text-md-right mt-md-0 mt-4">
                                                <span className="nav-title">
                                                    Next Post </span>
                                                <a href="#url" rel="next">
                                                    <h5>Lorem ipsum dolor sit amet</h5>
                                                </a>
                                            </div>
                                        </nav>
                                        {/* comment */}

                                        {/* reply */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 blog-right-view">
                                <aside>
                                    <div className="p-sticky-blog">
                                        <div className="side-gridhny mb-lg-5 mb-4">
                                            <div className="hny-cont-grid">
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                            <th colSpan={2}><span style={detailBoxStyle}>{tourDetail.tenTour}</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><b>Mã tour</b></td>
                                                            <td>{tourDetail.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Thời gian:</b></td>
                                                            <td>{tourDetail.soNgay} ngày {tourDetail.soDem} đêm</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Khởi hành:</b></td>
                                                            <td>
                                                                {/* 14,18,21,25/02; 04,11,18,25/03; 01,04,15,18,22,25/04 */}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Vận Chuyển:</b></td>
                                                            <td>{tourDetail.phuongTien}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><b>Xuất phát: </b></td>
                                                            <td>Từ Hồ Chí Minh </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                <a href="index.html"><img src={b1} className="img-fluid" alt="" /></a>
                                                <h6 className="text-left-inner-9"><a href="index.html">A more rewarding way to travel.</a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="side-gridhny mb-lg-5 mb-4">
                                            <h4 className="side-title">Giá người lớn: {tourDetail.giaNguoiLon} đ</h4>
                                            <h4 className="side-title">Giá từ: {tourDetail.giaTreEm} đ</h4>
                                            <h4 className="side-title">Giá từ: {tourDetail.giaTreNho} đ</h4>
                                            <div className="subscribe-form-three">
                                                {/* <form method="post" action="https://demo.w3layouts.com/demos_new/template_demo/04-04-2020/stroll-liberty-demo_Free/717367814/web/contact.html">
                                                    <div className="form-group">
                                                        <input type="email" name="email" value="" placeholder="Ngay dat tour" required="" />
                                                        <button type="submit" className="btn btn-block btn-style btn-primary">Đặt Tour</button>
                                                    </div>
                                                </form> */}
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <SpaceDiv />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail