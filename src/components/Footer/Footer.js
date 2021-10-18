import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-top-area">
          <Row>
            <Col md={3} sm={6}>
              <div className="footer-link">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#dental">Dental Surgery</a>
                  </li>
                  <li>
                    <a href="#cancer">Cancer Oncology</a>
                  </li>
                  <li>
                    <a href="#neurology">Neurology</a>
                  </li>
                  <li>
                    <a href="#drag">Drug / Medicine</a>
                  </li>
                  <li>
                    <a href="#pregency">Pregnancy & Births</a>
                  </li>
                  <li>
                    <a href="#endocrinology">Endocrinology</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="footer-link">
                <h4>Our Doctors</h4>
                <ul>
                  <li>
                    <a href="#doctor">Dr. Richard Seth</a>
                  </li>
                  <li>
                    <a href="#doctor">Dr. Naina Shah</a>
                  </li>
                  <li>
                    <a href="#doctor">Dr. John Deo</a>
                  </li>
                  <li>
                    <a href="#doctor">Dr. Ripple Dave</a>
                  </li>
                  <li>
                    <a href="#doctor">Dr. Tanmay Rissol</a>
                  </li>
                  <li>
                    <a href="#doctor">Dr. Thirtha Vyas</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="footer-link">
                <h4>Our Clinic</h4>
                <ul>
                  <li>
                    <a href="#client">Our Clinic</a>
                  </li>
                  <li>
                    <a href="#gallery">Photo Gallery</a>
                  </li>
                  <li>
                    <a href="#career">Career</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonials</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
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
