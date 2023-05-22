import React from "react";
import { Link } from "react-router-dom";

const Button = ({ id, children }) => {
  return (
    <>
      <Link to={"/product/" + id}>
        <button className="btn btn-success">{children}</button>
      </Link>
    </>
  );
};

export default Button;
