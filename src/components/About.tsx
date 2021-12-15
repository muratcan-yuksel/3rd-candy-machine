import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div id="aboutComponent">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div id="aboutImgContainer">
              <img src={aboutImg} alt="" id="aboutImg" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            2 of 2
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
