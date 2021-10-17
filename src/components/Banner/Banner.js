import React from "react";
import "./banner.css";
import { Container } from "react-bootstrap";
import BannerImage from "../../images/banner-bg.jpg";

const Banner = () => {
  return (
    <div
      className="banner-area"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <Container>
        <div className="banner-content">
          <h1>
            <span>we take care</span>
            your healthy life
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="btn-box">
            <a href="/" className="btn1 btn">
              get a doctor
            </a>
            <a href="/" className="btn2 btn">
              contact now
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
