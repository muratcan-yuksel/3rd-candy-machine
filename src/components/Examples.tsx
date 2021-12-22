import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import exampleImg from "../assets/16.png";
import "../styles/examples.css";

const Examples = () => {
  return (
    <div id="examplesComponent">
      <Row>
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <div className="exampleImgContainer">
            <img src="" alt="" className="exampleImg" />
          </div>
        </Col>{" "}
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <div className="exampleImgContainer">
            <img src="" alt="" className="exampleImg" />
          </div>
        </Col>{" "}
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <div className="exampleImgContainer">
            <img src="" alt="" className="exampleImg" />
          </div>
        </Col>{" "}
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <div className="exampleImgContainer">
            <img src="" alt="" className="exampleImg" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Examples;
