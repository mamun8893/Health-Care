import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-top-area">
          <Row>
            <Col md={3}>
              <div className="footer-link">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Dental Surgery</a>
                  </li>
                  <li>
                    <a href="/">Cancer Oncology</a>
                  </li>
                  <li>
                    <a href="/">Neurology</a>
                  </li>
                  <li>
                    <a href="/">Drug / Medicine</a>
                  </li>
                  <li>
                    <a href="/">Pregnancy & Births</a>
                  </li>
                  <li>
                    <a href="/">Endocrinology</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-link">
                <h4>Our Doctors</h4>
                <ul>
                  <li>
                    <a href="/">Dr. Richard Seth</a>
                  </li>
                  <li>
                    <a href="/">Dr. Naina Shah</a>
                  </li>
                  <li>
                    <a href="/">Dr. John Deo</a>
                  </li>
                  <li>
                    <a href="/">Dr. Ripple Dave</a>
                  </li>
                  <li>
                    <a href="/">Dr. Tanmay Rissol</a>
                  </li>
                  <li>
                    <a href="/">Dr. Thirtha Vyas</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-link">
                <h4>Our Clinic</h4>
                <ul>
                  <li>
                    <a href="/">Our Clinic</a>
                  </li>
                  <li>
                    <a href="/">Photo Gallery</a>
                  </li>
                  <li>
                    <a href="/">Career</a>
                  </li>
                  <li>
                    <a href="/">Testimonials</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-link">
                <h4>Business Hours</h4>
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
        </div>
        <div className="footer-copyright">
          <p>© 2021 Medihealth Care. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
