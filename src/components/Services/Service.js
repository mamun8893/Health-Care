import React from "react";
import { Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
          <a href="/" className="details-btn">
            Details
          </a>
        </div>
      </div>
    </Col>
  );
};

export default Service;
