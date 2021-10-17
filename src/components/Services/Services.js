import React from "react";
import "./services.css";
import useService from "../../hooks/useService";
import { Container, Row } from "react-bootstrap";
import Service from "./Service";

const Services = () => {
  const [services] = useService();
  return (
    <div className="service-area">
      <Container>
        <div className="heading text-center">
          <p>Our services</p>
          <h2>What We’re Offering</h2>
        </div>
        <div className="services-warper">
          <Row>
            {services.map((service) => (
              <Service service={service} key={service.id}></Service>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
