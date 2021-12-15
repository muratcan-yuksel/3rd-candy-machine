import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../assets/about.png";
import "../styles/about.css";

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
            <div id="aboutTextGroup">
              <h2 id="aboutTitle">About</h2>
              <h3 id="aboutWelcome">Welcome to our place </h3>
              <p className="aboutPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quod, dolores, odio libero voluptate aliquid quibusdam
                perferendis eius doloremque impedit rerum molestiae provident
                voluptatibus, ipsa sunt illo sed atque autem!
              </p>
              <p className="aboutPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quod, dolores, odio libero voluptate aliquid quibusdam
                perferendis eius doloremque impedit rerum molestiae provident
                voluptatibus, ipsa sunt illo sed atque autem!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
