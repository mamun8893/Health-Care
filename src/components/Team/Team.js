import React from "react";
import "./team.css";
import teamImg1 from "../../images/team1.png";
import teamImg2 from "../../images/team2.png";
import teamImg3 from "../../images/team3.png";
import teamImg4 from "../../images/team4.png";
import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
  return (
    <div className="Team-area">
      <Container>
        <div className="heading text-center">
          <p>Our Teams</p>
          <h2>Our High Qualified Doctors</h2>
        </div>
        <Row>
          {/* Team Item 1*/}
          <Col md={3}>
            <div className="team-item text-center">
              <div className="team-image">
                <img src={teamImg1} alt="" />
              </div>
              <div className="team-content">
                <h4>Dr. Brain Adam</h4>
                <p>Restorative Dentist</p>
              </div>
            </div>
          </Col>
          {/* Team Item 2*/}
          <Col md={3}>
            <div className="team-item text-center">
              <div className="team-image">
                <img src={teamImg2} alt="" />
              </div>
              <div className="team-content">
                <h4>Dr. Ripple Dave</h4>
                <p>Restorative Dentist</p>
              </div>
            </div>
          </Col>
          {/* Team Item 3*/}
          <Col md={3}>
            <div className="team-item text-center">
              <div className="team-image">
                <img src={teamImg3} alt="" />
              </div>
              <div className="team-content">
                <h4>Dr. John Deo</h4>
                <p>Restorative Dentist</p>
              </div>
            </div>
          </Col>
          {/* Team Item 4*/}
          <Col md={3}>
            <div className="team-item text-center">
              <div className="team-image">
                <img src={teamImg4} alt="" />
              </div>
              <div className="team-content">
                <h4>Dr. Naina Shah</h4>
                <p>Restorative Dentist</p>
              </div>
            </div>
          </Col>
          {/* Team Item End*/}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
