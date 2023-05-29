import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action/productAction";
import profileCSS from "../assets/css/profile.module.css";
import profileImage from "../assets/images/Profile Image.png";
import iconPen from "../assets/images/Icon Pen.svg";
import iconUser from "../assets/images/Icon User.svg";
import iconPin from "../assets/images/Icon Pin.svg";
import iconClipboard from "../assets/images/Icon Clipboard.svg";
import { Link } from "react-router-dom";
// import ModalDelete from "../components/ModalDelete";
import ModalCreate from "../components/ModalCreate";
import ModalDelete from "../components/ModalDelete";
import ModalEdit from "../components/ModalEdit";
import Button from "../components/Button";

function Profile() {
  const [fetchState, setFetchState] = useState(true);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getProduct());
    };
    if (fetchState) {
      fetchData();
      setFetchState(false);
    }
  }, [fetchState, setFetchState]);

  return (
    <>
      <div className="d-flex justify-content-start bg-color1">
        <div className="px-5 vh-100 bg-color2 d-flex flex-column align-items-center pt-5">
          <div className="d-flex flex-column align-items-start gap-5 pt-5">
            <div className="d-flex gap-3 justify-content-start align-items-center">
              <img
                src={profileImage}
                className="rounded-circle"
                alt="profile"
                width="80px"
              />
              <div>
                <span className="fs-5 metropolis-b text-nowrap">
                  Ikhlasul Kamal
                </span>
                <br />
                <img src={iconPen} alt="pen" width="10px" />
                <span className="text-secondary">Ubah profile</span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-start gap-3 w-100">
              <div className="d-flex align-items-center gap-2">
                <div
                  className={`${profileCSS.iconSidebar} rounded-circle d-flex justify-content-center align-items-center`}
                  style={{ backgroundColor: "#456bf3" }}
                >
                  <img src={iconUser} alt="user" />
                </div>
                <span>My Account</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div
                  className={`${profileCSS.iconSidebar} rounded-circle d-flex justify-content-center align-items-center`}
                  style={{ backgroundColor: "#f36f45" }}
                >
                  <img src={iconPin} alt="user" />
                </div>
                <Link to="#">
                  <span className="text-secondary">Shipping Address</span>
                </Link>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div
                  className={`${profileCSS.iconSidebar} rounded-circle d-flex justify-content-center align-items-center`}
                  style={{ backgroundColor: "#f3456f" }}
                >
                  <img src={iconClipboard} alt="user" />
                </div>
                <span className="text-secondary">My Order</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5">
          <div className="row vh-100 align-items-center justify-content-center">
            {/* <div className="col rounded-3 d-flex flex-column gap-3 bg-white border border-dark-subtle p-5">
              <div className="row">
                <h1 className="metropolis-b h3">My Profile</h1>
                <span className="text-secondary fs-6">
                  Manage your profile information
                </span>
              </div>
              <div className="row">
                <hr />
              </div>
              <div className="row">
                <div className="col-8 d-flex flex-column gap-3">
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <label
                      htmlFor="name"
                      className="text-nowrap label-width text-end"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control inputT"
                    />
                  </div>
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <label
                      htmlFor="email"
                      className="text-nowrap label-width text-end"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="form-control inputT"
                    />
                  </div>
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <label
                      htmlFor="phone"
                      className="text-nowrap label-width text-end"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control inputT"
                    />
                  </div>
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <span
                      htmlFor="gender"
                      className="text-nowrap label-width text-end"
                    >
                      Gender
                    </span>
                    <div className="inputT d-flex gap-3">
                      <div className="d-flex gap-1">
                        <input
                          type="radio"
                          id="pria"
                          name="gender"
                          defaultValue="pria"
                        />
                        <label htmlFor="pria">Pria</label>
                      </div>
                      <div className="d-flex gap-1">
                        <input
                          type="radio"
                          id="wanita"
                          name="gender"
                          defaultValue="wanita"
                        />
                        <label htmlFor="wanita">Wanita</label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <span
                      htmlFor="gender"
                      className="text-nowrap label-width text-end"
                    />
                    <div className="inputT">
                      <button className="btn btn-primary rounded-pill w-50">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column justify-content-start align-items-center gap-3">
                  <img
                    src={profileImage}
                    className="rounded-circle"
                    alt="Profile"
                    width="100px"
                  />
                  <button className="btn btn-outline-secondary rounded-pill w-50">
                    Select Image
                  </button>
                </div>
              </div>
            </div> */}
            <div className="col rounded-3 d-flex flex-column gap-3 bg-white border border-dark-subtle p-5">
              <div className="row">
                <h1 className="metropolis-b h3">Products</h1>
                <span className="text-secondary fs-6">Product management</span>
              </div>
              <div className="row">
                <hr />
              </div>
              <div className="row">
                <div className="col d-flex flex-column gap-4">
                  <ModalCreate setFetchState={setFetchState} />
                  {/* <button className="btn btn-primary w-25 text-nowrap">
                    Create Product
                  </button> */}
                  <table className="table table-light table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((element, index) => {
                        return (
                          <tr key={element.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{element.product_name}</td>
                            <td>{`Rp.`+element.product_price}</td>
                            <td>
                              <div>
                                {/* <ModalDelete
                                  dataId={element.id}
                                  // handleDelete={handleDelete}
                                  setFetchState={setFetchState}
                                /> */}
                                <ModalDelete
                                  id={element.id}
                                  name={element.name}
                                  setFetchState={setFetchState}
                                >
                                  Delete
                                </ModalDelete>
                                <ModalEdit
                                  id={element.id}
                                  name={element.product_name}
                                  price={element.product_price}
                                  photo={element.product_photo}
                                  setFetchState={setFetchState}
                                >
                                  Edit
                                </ModalEdit>
                                <Button id={element.id}>Details</Button>
                                {/* <Button id={element.id}>Details</Button> */}
                                {/* <button
                                  className="btn btn-warning"
                                  value={element.id}
                                >
                                  Edit
                                </button> */}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
