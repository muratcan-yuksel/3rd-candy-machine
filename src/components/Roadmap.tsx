import React from "react";
import "../styles/roadmap.css";
import { Container, Row, Col } from "react-bootstrap";
import roadmapImg from "../assets/3.png";

const Roadmap = () => {
  return (
    <div id="roadmapComponent">
      <h1 id="bigRoadmapTitle">ROADMAP</h1>
      <h3 id="roadmapNote">
        Note: “Queen beez are about to lay their eggz for the future of the
        Planet and Metaverse”
      </h3>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle">
                  PHASE 1: PRE-LAUNCH (Egg stage)
                </h4>
                <p className="roadmapText">**Finalize art design</p>
                <p className="roadmapText">**Finalize website</p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle">
                  PHASE 2: PRE-SALE (Larva Stage) Day 6
                </h4>
                <p className="roadmapText">
                  **2,500 discord (10 beez)/5,000 discord (10 beez)/10,000
                  discord (10 beez)
                </p>
                <p className="roadmapText">
                  Free NFT apparel featuring your minted NFT during Phase 4
                </p>{" "}
                <p className="roadmapText">
                  1,000 bees to be minted for .5 sol w/ an exclusive Needz Beez
                  OG Minter
                </p>{" "}
                <p className="roadmapText">
                  Black Card distributed during Phase 4
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle">
                  PHASE 3: LAUNCH 1st Mint (Larva) Day 10
                </h4>
                <p className="roadmapText">
                  50% of 1st mint (5 sol giveaway for 1 holder)
                </p>{" "}
                <p className="roadmapText">Merch Store Launch</p>{" "}
                <p className="roadmapText">
                  100% of 1st mint- 20% ROYALTIES activated (5 sol giveaway for
                  1 holders)
                </p>{" "}
                <p className="roadmapText">
                  4 HOLDERS OF QUEEN BEE WILL GET 5 SOL A MONTH FOR 3 months
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle"></h4>

                <p className="roadmapText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  qui voluptatem atque fugit blanditiis. Eveniet aperiam
                  assumenda adipisci impedit pariatur mollitia! Magni dolor
                  maiores aut numquam nihil quos aperiam beatae.
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle"></h4>

                <p className="roadmapText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  qui voluptatem atque fugit blanditiis. Eveniet aperiam
                  assumenda adipisci impedit pariatur mollitia! Magni dolor
                  maiores aut numquam nihil quos aperiam beatae.
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle"></h4>

                <p className="roadmapText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  qui voluptatem atque fugit blanditiis. Eveniet aperiam
                  assumenda adipisci impedit pariatur mollitia! Magni dolor
                  maiores aut numquam nihil quos aperiam beatae.
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <div className="roadmapContainer">
              <div className="roadmapImgContainer">
                <img src={roadmapImg} alt="" className="roadmapImg" />
              </div>
              <div className="roadmapBox">
                <h4 className="roadmapBoxTitle"></h4>

                <p className="roadmapText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  qui voluptatem atque fugit blanditiis. Eveniet aperiam
                  assumenda adipisci impedit pariatur mollitia! Magni dolor
                  maiores aut numquam nihil quos aperiam beatae.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
