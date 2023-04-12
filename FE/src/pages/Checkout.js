import React, { useEffect, useState } from "react";
import SpaceDiv from "../components/SpaceDiv";
import "../assets/css/style-liberty.css";

import b1 from "../assets/images/b1.jpg";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import TourApi from "../api/TourApi";
import UserApi from "../api/UserApi";


const Checkout = () => {
  let { id } = useParams();
  const [tourDetail, setTourDetail] = useState({});

  const navigate = useNavigate();

  console.log(tourDetail);

  useEffect(() => {
    const response = TourApi.getById(`${id}`);
    response.then((res) => setTourDetail(res));
  }, []);
  const[datTour,setDatTour] = useState({
    ten : "",
    diaChi: "",
    sdt : "",
    email: "",
    ghiChu:"",
    nguoiLon: "",
    treEm: "",
    treNho: "",
    soLuongDat : 1,
    idChitiettour: id

  });



  const sendDatTour =(e)=>{
    
    e.preventDefault();
    UserApi.datTour(datTour).then((response)=>{
      console.log(response);      
      alert(response)
      setDatTour({
        ten : "",
        diaChi: "",
        sdt : "",
        email: "",
        ghiChu:"",
        nguoiLon: "",
        treEm: "",
        treNho: "",
        soLuongDat : 1 ,
        idChitiettour: id

    
      })
      navigate("/Home")
    })
    .catch((response)=>{console.log(response)});
    
    // console.log(datTour);
  }



  const getDatachange=(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);
  
    setDatTour({
      ...datTour,
      [e.target.name ] : e.target.value
    
    });
    console.log(datTour);

  }

 

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
                    <label>Họ Tên</label>
                    <input type="text" name="ten" placeholder="Họ Tên" required="" value={datTour.ten} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Địa Chỉ</label>
                    <input type="text" name="diaChi" placeholder="Địa chỉ" required="" value={datTour.diaChi} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Số điện thoại</label>
                    <input type="text" name="sdt" placeholder="Số điện thoại" required="" value={datTour.sdt} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" required="" value={datTour.email} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Ghi chú</label>
                    <input type="text" name="ghiChu" placeholder="Ghi chú" required="" value={datTour.ghiChu} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Người lớn</label>
                    <input type="text" name="nguoiLon" placeholder="Người lớn" required="" value={datTour.nguoiLon} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Trẻ em(5 - 11 tuổi)</label>
                    <input type="text" name="treEm" placeholder="nhập số" required="" value={datTour.treEm} onChange={getDatachange}/>
                  </div>
                  <div class="form-input col-md-4 mt-3">
                    <label>Trẻ nhỏ(2 - 5 tuổi)</label>
                    <input type="text" name="treNho" placeholder="nhập số" required="" value={datTour.treNho} onChange={getDatachange}/>
                  </div>  
                  <div class="" style={{display: "flex",flexDirection : "column",alignItems:"end"}}>
                    {/* <label>Đặt Tour</label> */}
                    <button class="btn btn-style btn-primary " onClick={sendDatTour} style={{width:"32%", marginTop: "20px"}}>
                      Đặt Tour
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
