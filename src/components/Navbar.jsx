import React from "react";
// import "../assets/css/checkout.css";
import navbarCSS from "../assets/css/navbar.module.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import mainLogo from "../assets/images/Main Logo.svg";
import iconShop from "../assets/images/Icon Shop.svg";
import iconBell from "../assets/images/Icon Bell.svg";
import iconMail from "../assets/images/Icon Mail.svg";
import iconFilter from "../assets/images/Icon Filter.svg";
import profileImage from "../assets/images/Profile Image.png";

function Navbar() {
  const navigate = useNavigate();
  const isLogin = false;
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/test"
  )
    return <></>;
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-white shadow">
        <div className="container">
          <Link
            className="navbar-brand d-flex justify-content-center align-items-center"
            to="/"
          >
            <img src={mainLogo} alt="shopbag" />
            <h1 className="mt-3 ms-2 metropolis-b fs-3 primary-color">
              Blanja
            </h1>
          </Link>
          {isLogin ? (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                  <div className="nav-item">
                    <form
                      className="d-flex justify-content-center align-items-center h-100"
                      role="search"
                    >
                      <input
                        className="form-control me-2 rounded-pill input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  <div className="nav-item ms-lg-auto my-3 my-lg-0 d-flex justify-content-center align-items-center">
                    <Link to="#">
                      <img src={iconShop} className="me-4" alt="Cart" />
                    </Link>
                    <Link to="#">
                      <img src={iconBell} className="me-4" alt="Cart" />
                    </Link>
                    <Link to="#">
                      <img src={iconMail} className="me-4" alt="Cart" />
                    </Link>
                    <Link to="#">
                      <img
                        src={profileImage}
                        className="me-4 rounded-circle"
                        alt="Cart"
                        width="35px"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                  <div className="nav-item">
                    <form
                      className="d-flex justify-content-center align-items-center h-100"
                      role="search"
                    >
                      <input
                        className="form-control me-2 rounded-pill input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filter"
                      >
                        <img
                          src={iconFilter}
                          className="rounded-5 filter-img"
                          alt=""
                        />
                      </Link>
                    </form>
                  </div>
                  <div className="nav-item gap-3 ms-lg-auto my-3 my-lg-0 d-flex justify-content-center align-items-center">
                    <Link to="#">
                      <img src={iconShop} className="me-3" alt="Cart" />
                    </Link>
                    <button
                      className={`${navbarCSS.navbarButton} btn btn-primary rounded-pill`}
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </button>
                    <button
                      className={`${navbarCSS.navbarButton} btn btn-outline-secondary rounded-pill`}
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
