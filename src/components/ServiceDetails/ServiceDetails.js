import React from "react";
import "./service-details.css";
import breadcumbBg from "../../images/breadcumb-bg.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useService from "../../hooks/useService";
import { NavLink } from "react-router-dom";

const ServiceDetails = () => {
  const [services] = useService();
  const { serviceId } = useParams();
  const serviceItem = services?.find((service) => service.id == serviceId);
  return (
    <div className="service-details-area">
      {/* Breadcumb */}
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <Container>
          <div className="breadcumb-content">
            <h2>Service Details</h2>
            <div className="m-page-link">
              <NavLink to="/home" className="link first-link">
                Home
              </NavLink>
              <p className="link">Service Details</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="service-details-warper">
          <Row>
            {/* Service details left */}
            <Col md={3}>
              <div className="service-details-left">
                <ul>
                  <li>Dental Surgery</li>
                  <li className="active">Cancer Oncology</li>
                  <li>Neurology</li>
                  <li>Drug / Medicine</li>
                  <li>Pregnancy & Births</li>
                  <li>Endocrinology</li>
                </ul>
              </div>
            </Col>
            {/* Service details Right */}
            <Col md={9}>
              <div className="service-details-right">
                <div className="servide-details-image">
                  <img
                    src={serviceItem?.detailsImage}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="service-deatils-content">
                  <h1>{serviceItem?.name}</h1>
                  <p>{serviceItem?.longDescription}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
