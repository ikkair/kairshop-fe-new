import React, { useState } from "react";
import mainLogo from "../assets/images/Main Logo.svg";
import { Link } from "react-router-dom";
import authCSS from "../assets/css/auth.module.css";
import Swal from "sweetalert2";
import axios from "axios";

function Login() {
  const [formLoginSeller, setFormLoginSeller] = useState({
    email: "",
    password: ""
  })
  const [formLoginUser, setFormLoginUser] = useState({
    email: "",
    password: ""
  })
  const handleChangeSeller = (event) => {
    setFormLoginSeller({
      ...formLoginSeller,
      [event.target.name]: event.target.value
    })
  }
  const handleChangeUser = (event) => {
    setFormLoginUser({
      ...formLoginUser,
      [event.target.name]: event.target.value
    })
  }
  const handleLoginSeller = (event) => {
    event.preventDefault()
    console.log(formLoginSeller)
    // axios.post(`${process.env.REACT_APP_BACKEND}/users/login`, formLoginUser)
    //   .then((res) => {
    //     console.log(res.data.data[0])
    //     Swal.fire({
    //       title: `Login Success`,
    //       text: `${res.data.message}`,
    //       icon: 'success',
    //     });
    //     const data = res.data.data[0]
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('id', data.id);
    //     localStorage.setItem('role', data.role);
    //     localStorage.setItem('photo', data.photo);
    //     // router.push("/")
    //   })
    //   .catch((err) => {
    //     if (err.response && err.response.data) {
    //       Swal.fire({
    //         title: `Login Failed`,
    //         text: `${err.response.data.message}`,
    //         icon: 'error',
    //       });
    //     } else {
    //       Swal.fire({
    //         title: `Login Failed`,
    //         text: `Unknown issue, please contact admin`,
    //         icon: 'error',
    //       });
    //     }
    //     setFormLoginUser({
    //       email: "",
    //       password: ""
    //     })
    //   })
  }
  const handleLoginUser = (event) => {
    event.preventDefault()
    console.log(formLoginUser)
    // axios.post(`${process.env.REACT_APP_BACKEND}/users/login`, formLoginUser)
    //   .then((res) => {
    //     console.log(res.data.data[0])
    //     Swal.fire({
    //       title: `Login Success`,
    //       text: `${res.data.message}`,
    //       icon: 'success',
    //     });
    //     const data = res.data.data[0]
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('id', data.id);
    //     localStorage.setItem('role', data.role);
    //     localStorage.setItem('photo', data.photo);
    //     // router.push("/")
    //   })
    //   .catch((err) => {
    //     if (err.response && err.response.data) {
    //       Swal.fire({
    //         title: `Login Failed`,
    //         text: `${err.response.data.message}`,
    //         icon: 'error',
    //       });
    //     } else {
    //       Swal.fire({
    //         title: `Login Failed`,
    //         text: `Unknown issue, please contact admin`,
    //         icon: 'error',
    //       });
    //     }
    //     setFormLoginUser({
    //       email: "",
    //       password: ""
    //     })
    //   })
  }
  return (
    <>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          {/* Logo Start */}
          <div className="row">
            <Link to="/">
              <div className="col d-flex justify-content-center align-items-center">
                <img src={mainLogo} alt="shopbag" />
                <h1 className="mt-3 ms-2 fnt-color metropolis-b fs-3">
                  Blanja
                </h1>
              </div>
            </Link>
          </div>
          {/* Logo End */}
          {/* Text Start */}
          <div className="row mt-3">
            <div className="col d-flex justify-content-center align-items-center">
              <p className="metropolis-b">Please login with your account</p>
            </div>
          </div>
          {/* Text End */}
          {/* Button Start */}
          <div className="row justify-content-center">
            <div
              className="col-2 nav nav-pills d-flex justify-content-center align-items-center"
              id="v-pills-tab"
              role="tablist"
            >
              <div className="btn-group w-100 d-flex justify-content-center align-items-center">
                <button
                  className={`${authCSS.authButton} nav-left nav-link active`}
                  id="v-pills-customer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-customer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-customer"
                  aria-selected="true"
                >
                  Customer
                </button>
                <button
                  className={`${authCSS.authButton} nav-link nav-right`}
                  id="v-pills-seller-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-seller"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-seller"
                  aria-selected="false"
                >
                  Seller
                </button>
              </div>
            </div>
          </div>
          {/* Button End */}
          {/* Input Start */}
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-customer"
              role="tabpanel"
              aria-labelledby="v-pills-customer-tab"
              tabIndex={0}
            >
              <div className="row mt-4 my-3 justify-content-center">
                <div className="col-lg-4 ">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={handleChangeUser}
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={handleChangeUser}
                  />
                </div>
              </div>
              <div className="row mt-4 mb-4 justify-content-center">
                <div className="col-lg-4 d-flex justify-content-center">
                  <button onClick={handleLoginUser} className="btn btn-primary rounded-pill w-100">
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-seller"
              role="tabpanel"
              aria-labelledby="v-pills-seller-tab"
              tabIndex={0}
            >
              <div className="row mt-4 my-3 justify-content-center">
                <div className="col-lg-4 ">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={handleChangeSeller}
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={handleChangeSeller}
                  />
                </div>
              </div>
              <div className="row mt-4 mb-4 justify-content-center">
                <div className="col-lg-4 d-flex justify-content-center">
                  <button onClick={handleLoginSeller} className="btn btn-primary rounded-pill w-100">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Input End */}
          {/* F Password Start */}
          {/* <div className="row my-3 justify-content-center">
            <div className="col-lg-4 d-flex justify-content-end">
              <Link to="#">
                <span className="">Forgot password?</span>
              </Link>
            </div>
          </div> */}
          {/* F Password End */}
          {/* Button Start */}

          {/* Button End */}
          {/* Register Start */}
          <div className="row">
            <div className="col d-flex justify-content-center">
              <p>
                Don't have an account?{" "}
                <Link to="/register">
                  <span className="">Register</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Register End */}
        </div>
      </div>
    </>
  );
}

export default Login;
