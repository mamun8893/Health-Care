import React from "react";
import { Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Service = (props) => {
  const { id, name, image, shortDescription } = props.service;
  return (
    <Col lg={4} md={6}>
      <div className="service-item">
        <div className="service-image">
          <img src={image} alt="" />
        </div>
        <div className="service-content">
          <h3>{name}</h3>
          <p>{shortDescription.slice(0, 100)}</p>
          <NavLink to={`/service-details/${id}`} className="details-btn">
            Details
          </NavLink>
        </div>
      </div>
    </Col>
  );
};

export default Service;
