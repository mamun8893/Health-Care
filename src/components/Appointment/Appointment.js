import React from "react";
import breadcumbBg from "../../images/breadcumb-bg.jpg";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  return (
    <div className="appointment-area">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <Container>
          <div className="breadcumb-content">
            <h2>Appoinment</h2>
            <div className="m-page-link">
              <NavLink to="/home" className="link first-link">
                Home
              </NavLink>
              <p className="link">Appointment</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="appoint-form">
        <Container>
          <div className="heading text-center">
            <p>Appointment Form</p>
            <h2>Get A Free Service Now!</h2>
          </div>
          <div className="contact-form">
            <Row className="justify-content-center">
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Phone"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Service</Form.Label>
                      <Form.Select className="form-control">
                        <option>Select Service</option>
                        <option>Service one</option>
                        <option>Service Two</option>
                        <option>Service Three</option>
                        <option>Service Four</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Your Date" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Time</Form.Label>
                      <Form.Control type="time" placeholder="Enter Your Time" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        className="textarea"
                        placeholder="Enter Your Message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary">Submit Now</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Appointment;
