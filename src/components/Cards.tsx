import React from "react";
import "../styles/cards.css";
import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  return (
    <div id="cardsComponent">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">Title</h2>
              <p className="cardsPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                neque id veniam praesentium perspiciatis odit repellat, alias
                cupiditate excepturi corporis cumque libero itaque corrupti,
                minus quae ea ipsum nisi voluptas!
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">Title</h2>
              <p className="cardsPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                neque id veniam praesentium perspiciatis odit repellat, alias
                cupiditate excepturi corporis cumque libero itaque corrupti,
                minus quae ea ipsum nisi voluptas!
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">Title</h2>
              <p className="cardsPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                neque id veniam praesentium perspiciatis odit repellat, alias
                cupiditate excepturi corporis cumque libero itaque corrupti,
                minus quae ea ipsum nisi voluptas!
              </p>
            </div>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
