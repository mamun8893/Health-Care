import React from "react";
import "./contact.css";
import breadcumbBg from "../../images/breadcumb-bg.jpg";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-area">
      {/* Breadcumb */}
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <Container>
          <div className="breadcumb-content">
            <h2>Conatct Us</h2>
            <div className="m-page-link">
              <NavLink to="/home" className="link first-link">
                Home
              </NavLink>
              <p className="link">Contact</p>
            </div>
          </div>
        </Container>
      </div>
      {/* Contact form */}
      <Container>
        <div className="contact-form-warper">
          <div className="heading text-center">
            <p>Active & Ready to use Contact Form!</p>
            <h2>Interested in discussing?</h2>
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
                    <Form.Group className="mb-3" controlId="formBasicSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Subject"
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
                <Button variant="primary">Send Your Message</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
