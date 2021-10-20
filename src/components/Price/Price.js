import React from "react";
import "./price.css";
import breadcumbBg from "../../images/breadcumb-bg.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Price = () => {
  return (
    <div className="Price-area">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <Container>
          <div className="breadcumb-content">
            <h2>Price List</h2>
            <div className="m-page-link">
              <NavLink to="/home" className="link first-link">
                Home
              </NavLink>
              <p className="link">Price</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="price-area-content-warper">
        <Container>
          <div className="heading text-center">
            <p>Price</p>
            <h2>Our Healthcare Price List</h2>
          </div>
          <Row>
            <Col md={8}>
              <div className="price-list-left">
                <Row>
                  <Col md={6}>
                    <div className="price-list-waarper">
                      <h2>Diagnostics</h2>
                      <div className="price-list">
                        <ul>
                          <li>
                            Bronchoscopy <span>From $ 250</span>
                          </li>
                          <li>
                            Parathyroid scan <span>From $ 49</span>
                          </li>
                          <li>
                            Orthotics <span>From $ 117</span>
                          </li>
                          <li>
                            Captopril Renography <span>From $ 65</span>
                          </li>
                          <li>
                            Fool Blood Count <span>From $ 34</span>
                          </li>
                          <li>
                            Head CT <span>From $ 220</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="price-list-waarper">
                      <h2>Treatments</h2>
                      <div className="price-list">
                        <ul>
                          <li>
                            Digestive care <span>From $ 350</span>
                          </li>
                          <li>
                            Dialysis <span>From $ 200</span>
                          </li>
                          <li>
                            Fertility <span>From $ 600</span>
                          </li>
                          <li>
                            Infusion therapy <span>From $ 65</span>
                          </li>
                          <li>
                            Lymphedema therapy
                            <span>From $ 480</span>
                          </li>
                          <li>
                            Home care <span>From $ 180</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <div className="price-working-hours">
                <h4>Working Hours</h4>
                <ul>
                  <li>Monday : 8:30 - 9:00</li>
                  <li>Tuesday : 8:00 - 9:00</li>
                  <li>Wednesday : 8:00 - 9:00</li>
                  <li>Thursday : 8:30 - 9:00</li>
                  <li>Friday : 10:00 - 4:00</li>
                  <li>Saturday : Closed</li>
                  <li>Saturday : Closed</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Price;
