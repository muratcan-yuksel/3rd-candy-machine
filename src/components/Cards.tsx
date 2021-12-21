import React from "react";
import "../styles/cards.css";
import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  return (
    <div id="cardsComponent">
      <h1 id="cardsBigTitle">FAQ</h1>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">Why bees?</h2>
              <p className="cardsPara">
                Pollinating Bees are some of the hardest working & most
                important creatures on the planet. Bees and other pollinators
                are responsible for every third mouthful we eat. For years, we
                have decimated the way of Life for one of the world’s oldest
                food producers to a point of extinction. Now it is time to make
                a change! With the help of an active Bee Community, we can start
                the Bee Revolution!
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">What inspired Needz Beez Hive?</h2>
              <p className="cardsPara">
                This project has been created by a team of NFT & Nature
                enthusiasts. We believe in NFTs as an expressional way to
                provide charitable contribution through utility benefits for the
                holders. Furthermore, as an instrument to develop support
                networks for charitable contribution and conservation efforts
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">What are Needz Beez NFTs?</h2>
              <p className="cardsPara">
                Needz Beez NFTs are a collection of 8,000 digital art pieces of
                bees minted on the Solana blockchain. Owning a Needz Beez NFT
                will give you access to very exclusive events and features :
                charity donations, hive sponsoring, P2E Blockchain game,
                percentage of royalties, community DAO, free access to a
                respected artist collection, NFT staking, Exclusive Needz Beez
                Merchandise and Giveaways.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">How many Traits and Attributes ?</h2>
              <p className="cardsPara">
                Our unique collection has 8 total properties and 100+ traits
                based around 4 of the world's most famous bees (BumbleBee, Honey
                Bee, Leaf Cutter Bee, AND Killer Bee) . Which hive will you
                join?
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">
                When will I be able to own my own Needz Beez NFT??
              </h2>
              <p className="cardsPara">
                The bees will be released from The Hive in February, no specific
                date yet.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">Where can I get my Needz Beez NFT?</h2>
              <p className="cardsPara">
                You can get your hands on a Needz Beez NFT on the Solana
                Marketplace.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">What is the cost of a mint?</h2>
              <p className="cardsPara">5 Sol Pre sale, 1 sol Public Sale</p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">
                Are Needz Beez supporting charities?
              </h2>
              <p className="cardsPara">
                Yes! The Needz Beez Foundation will allocate up to 20% of sales
                & royalties. managed through a DAO, to help worldwide bees. Join
                the Discord server to make an impact and learn more.
              </p>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="cardsContainer">
              <h2 className="cardsTitle">How can I get in touch?</h2>
              <p className="cardsPara">
                Follow us on Discord, Twitter, and Instagram. The best place for
                regular updates and announcements is the Needz Beez Discord
              </p>
            </div>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
