import React from "react";
import "./gallery.css";
import gallery1 from "../../images/gallery1.png";
import gallery2 from "../../images/gallery2.png";
import gallery3 from "../../images/gallery3.png";
import gallery4 from "../../images/gallery4.png";
import gallery5 from "../../images/gallery5.png";
import { Col, Container, Row } from "react-bootstrap";

const Gallery = () => {
  return (
    <div className="gallery-area">
      <Container>
        <div className="heading text-center">
          <p>Gallery</p>
          <h2>Our Gallery</h2>
        </div>
        <div className="gallery-warper">
          <Row>
            <Col md={4}>
              <div className="gallery-item">
                <img src={gallery1} alt="" />
              </div>
            </Col>
            <Col md={8}>
              <div className="gallery-item">
                <img src={gallery2} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <img src={gallery3} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <img src={gallery4} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <img src={gallery5} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
