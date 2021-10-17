import React from "react";
import { Col } from "react-bootstrap";

const Service = (props) => {
  const { id, name, image, shortDescription } = props.service;
  return (
    <Col md={4}>
      <div className="service-item">
        <div className="service-image">
          <img src={image} alt="" />
        </div>
        <div className="service-content">
          <h3>{name}</h3>
          <p>{shortDescription.slice(0, 100)}</p>
        </div>
      </div>
    </Col>
  );
};

export default Service;
