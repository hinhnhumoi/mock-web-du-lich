import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/css/style-liberty.css";
import storage from "../storage/Storage";

const NavBar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(storage.getItem("ten"));
  }, []);

  return (
    <>
      <section className="w3l-header-4 mobile-header">
        <div className="header-tophny">
          <div className="container-fluid">
            <header className="top-headerhny">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                  <span className="fa fa-globe" aria-hidden="true"></span>Travel
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      {/* <a className="nav-link" href="index.html">Home</a> */}
                      <NavLink to="/home" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="about.html">About</a> */}
                      <NavLink to="/details" className="nav-link">
                        details
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/checkout" className="nav-link">
                        Checkout
                      </NavLink>
                    </li>

                    <li className="nav-item">{username}</li>
                  </ul>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
