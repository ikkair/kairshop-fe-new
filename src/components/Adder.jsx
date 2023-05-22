import React from "react";
import btnNegative from "../assets/images/Icon Negative.svg";
import btnPositive from "../assets/images/Icon Positive.svg";

function Adder() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-2">
        <img src={btnNegative} alt="" width="30px" />
        <span className="fs-5">1</span>
        <img src={btnPositive} alt="" width="30px" />
      </div>
    </>
  );
}

export default Adder;
