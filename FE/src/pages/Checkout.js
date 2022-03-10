import React, { useEffect, useState } from "react";
import SpaceDiv from "../components/SpaceDiv";
import "../assets/css/style-liberty.css";

import b1 from "../assets/images/b1.jpg";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

import TourApi from "../api/TourApi";

const Checkout = () => {
  let { id } = useParams();
  const [tourDetail, setTourDetail] = useState({});

  console.log(tourDetail);

  useEffect(() => {
    const response = TourApi.getById(`${id}`);
    response.then((res) => setTourDetail(res));
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
                    <div className="single-page-img"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 blog-right-view">
                <aside>
                  <div className="p-sticky-blog">
                    <div className="side-gridhny mb-lg-5 mb-4">
                      <div className="hny-cont-grid">
                        <a href="index.html">
                          <img src={b1} className="img-fluid" alt="" />
                        </a>
                        <h6 className="text-left-inner-9">
                          <a href="index.html">
                            A more rewarding way to travel.
                          </a>
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
                <h4
                  className="text-head-text-9 my-2"
                  style={{ textAlign: "center" }}
                >
                  BẢNG GIÁ TOUR CHI TIẾT
                </h4>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>{tourDetail.tenTour}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Thời gian</b>
                    </td>
                    <td>{tourDetail.soNgay} ngày {tourDetail.soDem} đêm</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Địa điểm</b>
                    </td>
                    <td>{tourDetail.diaDiem} - {tourDetail.tinh}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Lịch Trình</b>
                    </td>
                    <td>
                      {tourDetail.lichTrinh}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Phương tiện</b>
                    </td>
                    <td>{tourDetail.phuongTien}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Số lượng tối đa </b>
                    </td>
                    <td>{tourDetail.sltd} </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Giá người lớn </b>
                    </td>
                    <td>{tourDetail.giaNguoiLon} VNĐ </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Giá trẻ em </b>
                    </td>
                    <td>{tourDetail.giaTreEm} VNĐ</td>
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
                <h4
                  className="text-head-text-9 my-2"
                  style={{ textAlign: "center" }}
                >
                  THÔNG TIN LIÊN HỆ
                </h4>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>Công ty du lịch Travel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Địa chỉ:</b>
                    </td>
                    <td>số 307 đường X phường Y thành phố Z</td>
                  </tr>
                  <tr>
                    <td>
                      <b>SĐT liên hệ:</b>
                    </td>
                    <td>0123456789</td>
                  </tr>

                </tbody>
              </Table>
            </div>
            <SpaceDiv />
          </div>
          <div className="container py-lg-5">
            <div class="booking-form-content">
              <span class="sub-title"></span>
              <h3 class="hny-title">Thông Tin Liên Hệ</h3>
              <form
                action="search-results.html"
                method="post"
                class="booking-form"
              >
                <div class="row book-form">
                  <div class="form-input col-md-4 mt-3">
                    <label>Name</label>
                    <input type="text" name="" placeholder="Name" required="" />
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Destination</label>
                    <select name="selectpicker" class="selectpicker">
                      <option value="">Any</option>
                      <option value="africa">Africa</option>
                      <option value="america">America</option>
                      <option value="asia">Asia</option>
                      <option value="eastern-europe">Eastern Europe</option>
                      <option value="europe">Europe</option>
                      <option value="south-america">South America</option>
                    </select>
                  </div>
                  <div class="form-input col-md-4  mt-3">
                    <label>Activity</label>
                    <select name="activity" class="selectpicker">
                      <option value="">Any</option>
                      <option value="city-tours">City Tours</option>
                      <option value="cultural-thematic-tours">
                        Cultural &amp; Thematic Tours
                      </option>
                      <option value="family-friendly-tours">
                        Family Friendly Tours
                      </option>
                      <option value="holiday-seasonal-tours">
                        Holiday &amp; Seasonal Tours
                      </option>
                      <option value="indulgence-luxury-tours">
                        Indulgence &amp; Luxury Tours
                      </option>
                      <option value="outdoor-activites">
                        Outdoor Activites
                      </option>
                      <option value="relaxation-tours">Relaxation Tours</option>
                      <option value="wild-adventure-tours">
                        Wild &amp; Adventure Tours
                      </option>
                    </select>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Duration</label>
                    <select name="duration" class="selectpicker">
                      <option value="">Any</option>
                      <option value="1">1 Day Tour</option>
                      <option value="2">2-4 Days Tour</option>
                      <option value="5">5-7 Days Tour</option>
                      <option value="7">7+ Days Tour</option>
                    </select>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Date</label>
                    <input type="date" name="" placeholder="Date" required="" />
                  </div>
                  <div class="bottom-btn col-md-4 mt-3">
                    <label>Submit</label>
                    <button class="btn btn-style btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
