import React from "react";
import "./notfound.css";
import errorImg from "../../images/error.jpg";
const NotFound = () => {
  return (
    <div className="error-area text-center">
      <img src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
