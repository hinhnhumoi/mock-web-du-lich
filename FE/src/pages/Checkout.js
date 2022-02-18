import React from 'react'
import SpaceDiv from '../components/SpaceDiv'
import '../assets/css/style-liberty.css'

import b1 from '../assets/images/b1.jpg'
import { Table } from 'react-bootstrap'


const Checkout = () => {
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
                    <div className="single-page-img"></div>

                  </div>
                </div>
              </div>
              <div className="col-lg-4 blog-right-view">
                <aside>
                  <div className="p-sticky-blog">
                    <div className="side-gridhny mb-lg-5 mb-4">
                      <div className="hny-cont-grid">

                        <a href="index.html"><img src={b1} className="img-fluid" alt="" /></a>
                        <h6 className="text-left-inner-9"><a href="index.html">A more rewarding way to travel.</a>
                        </h6>
                      </div>
                    </div>

                  </div>
                </aside>
              </div>
            </div>
            <SpaceDiv />
          </div>

          <div className="container py-lg-5">
            <SpaceDiv />
            <div className="strollhny-blog-grids row">
              <div className="post-content">
                <span className="sub-title"></span>
                <h4 className="text-head-text-9 my-2" style={{ textAlign: 'center' }}>BẢNG GIÁ TOUR CHI TIẾT</h4>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>Du lịch Đà Nẵng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Mã tour</b></td>
                    <td>15985</td>
                  </tr>
                  <tr>
                    <td><b>Thời gian:</b></td>
                    <td>3 ngày 2 đêm</td>
                  </tr>
                  <tr>
                    <td><b>Khởi hành:</b></td>
                    <td>
                      14,18,21,25/02; 04,11,18,25/03; 01,04,15,18,22,25/04  </td>
                  </tr>
                  <tr>
                    <td><b>Vận Chuyển:</b></td>
                    <td>Xe du lịch, Máy bay</td>
                  </tr>
                  <tr>
                    <td><b>Xuất phát: </b></td>
                    <td>Từ Hồ Chí Minh </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <SpaceDiv />
          </div>

          <div className="container py-lg-5">
            <SpaceDiv />
            <div className="strollhny-blog-grids row">
              <div className="post-content">
                <span className="sub-title"></span>
                <h4 className="text-head-text-9 my-2" style={{ textAlign: 'center' }}>THÔNG TIN LIÊN HỆ</h4>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>Du lịch Đà Nẵng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Mã tour</b></td>
                    <td>15985</td>
                  </tr>
                  <tr>
                    <td><b>Thời gian:</b></td>
                    <td>3 ngày 2 đêm</td>
                  </tr>
                  <tr>
                    <td><b>Khởi hành:</b></td>
                    <td>
                      14,18,21,25/02; 04,11,18,25/03; 01,04,15,18,22,25/04  </td>
                  </tr>
                  <tr>
                    <td><b>Vận Chuyển:</b></td>
                    <td>Xe du lịch, Máy bay</td>
                  </tr>
                  <tr>
                    <td><b>Xuất phát: </b></td>
                    <td>Từ Hồ Chí Minh </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <SpaceDiv />
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout