import React from "react";
// import "../assets/css/checkout.css";
import checkoutCSS from "../assets/css/checkout.module.css";
import product1 from "../assets/images/Product V1-1.png";
import product5 from "../assets/images/Product V1-5.png";
import logoGopay from "../assets/images/Logo Gopay.svg";
import logoPos from "../assets/images/Logo Pos.svg";
import logoMastercard from "../assets/images/Logo Mastercard.svg";

function Checkout() {
  return (
    <>
      <section className="container pt-5 mt-5">
        <div className="row mt-3">
          <h1 className="metropolis-b">Checkout</h1>
        </div>
        <div className="row mt-2">
          <div className="col-lg-8 d-flex flex-column">
            <h2 className="h6 metropolis-b">Shipping address</h2>
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h6 className="metropolis-b">Andreas Jane</h6>
                <p>
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                  Kabupaten Banyumas, Jawa Tengah, 53181 Sokaraja, Kab.
                  Banyumas, 53181
                </p>
                <button
                  className="btn btn-outline-secondary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#addressModal"
                >
                  Choose another address
                </button>
              </div>
            </div>
            <div className="card shadow-sm mb-2">
              <div className="d-flex align-items-center">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={product1}
                      className="rounded-4 me-2"
                      width="103px"
                      alt="product"
                    />
                    <div>
                      <b>Men's formal suit - Black</b>
                      <span className="d-block text-secondary">
                        Zalora Cloth
                      </span>
                    </div>
                  </div>
                  <span className="fs-5">
                    <b>Rp.20000</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-sm mb-2">
              <div className="d-flex align-items-center">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={product5}
                      className="rounded-4 me-2"
                      alt=""
                      width="103px"
                    />
                    <div>
                      <b>Men's Jacket Jeans New</b>
                      <span className="d-block text-secondary">
                        Zalora Cloth
                      </span>
                    </div>
                  </div>
                  <span className="fs-5">
                    <b>Rp.20000</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column ">
                <b className="fs-5 mb-3">Shopping summary</b>
                <div className="d-flex justify-content-between">
                  <span className="fs-5 text-secondary">Order</span>
                  <span className="text-danger fs-4">Rp.40000</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fs-5 text-secondary">Delivery</span>
                  <span className="text-danger fs-4">Rp.5000</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span className="fs-5 text-secondary">Shopping summary</span>
                  <span className="text-danger fs-4 metropolis-b">Rp.45000</span>
                </div>
                <button
                  className="btn btn-primary rounded-pill w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#paymentModal"
                >
                  Select payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="addressModal"
        tabIndex={-1}
        aria-labelledby="addressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex flex-column gap-3">
              <h2 className="metropolis-b text-center">
                Choose another address
              </h2>
              <div
                className={`${checkoutCSS.checkoutNewAddress} text-center py-3 rounded-3`}
              >
                <h4 className="metropolis-b text-secondary">Add new address</h4>
              </div>
              <div className="border border-danger rounded-3 p-3">
                <h6>Andreas Jane</h6>
                <p>
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                  Kabupaten Banyumas, Jawa Tengah, 53181 Sokaraja, Kab.
                  Banyumas, 53181
                </p>
                <h6 className="metropolis-b text-danger">Change address</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="paymentModal"
        tabIndex={-1}
        aria-labelledby="paymentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="payment">
                Payment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex flex-column gap-3">
              <span className="metropolis-b">Payment method</span>
              <div className="d-flex align-items-center">
                <div
                  className={`${checkoutCSS.checkoutImgWrap} d-flex align-items-center justify-content-center`}
                >
                  <img src={logoGopay} alt="gopay" />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span>Gopay</span>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="payment"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className={`${checkoutCSS.checkoutImgWrap} d-flex align-items-center justify-content-center`}
                >
                  <img src={logoPos} alt="pos" />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span>POS Indonesia</span>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="payment"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className={`${checkoutCSS.checkoutImgWrap} d-flex align-items-center justify-content-center`}
                >
                  <img src={logoMastercard} alt="mastercard" />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span>Mastercard</span>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="payment"
                  />
                </div>
              </div>
              <hr />
              <div>
                <span className="metropolis-b">Shopping summary</span>
                <br />
                <div className="d-flex justify-content-between">
                  <span className="text-secondary">Order</span>
                  <span className="metropolis-b">Rp.40000</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-secondary">Delivery</span>
                  <span className="metropolis-b">Rp5000</span>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div>
                <span className="metropolis-b">Shopping summary</span>
                <br />
                <span className="metropolis-b fs-5 text-danger">Rp.45000</span>
              </div>
              <button
                type="button"
                className="btn btn-primary rounded-pill w-50"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
