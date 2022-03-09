import React from 'react'
import { Link } from 'react-router-dom'
import g1 from '../assets/images/g1.jpg'

const SlickItem = ({ tour }) => {
  console.log(tour);

  return (
    <div className="content-left-sec gal-slide-grid">
      <div className="gal-slide-img">
        <Link to={{
          pathname: `/details/${tour.id}`,
          state: { tour: tour }
        }}
        >
          <img src={tour.moTaTour && `http://127.0.0.1:8887/${tour.moTaTour}`} className="img img-fluid" alt="" />
        </Link>
      </div>
      <div className="gal-slide-info">

        <h6 className="mt-sm-2 mt-1">{tour.tenTour}<br></br>
        <span>{tour.giaNguoiLon} &#8363;</span></h6>

      </div>
    </div>
  )
}

export default SlickItem