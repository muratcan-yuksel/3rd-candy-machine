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
                <h4 className="roadmapBoxTitle">
                  PHASE 4: PRE-LAUNCH 2 (Pupa) Day 14
                </h4>

                <p className="roadmapText">REVEAL BEE FARM TRIP LOCATION</p>
                <p className="roadmapText">5 sol giveaway for 2 holders</p>
                <p className="roadmapText">
                  AFTER 40 DAYS, HOLDERS WILL QUALIFY FOR BEE FARM TRIP,
                  WHITELIST FOR SECOND MINT.
                </p>
                <p className="roadmapText">
                  COLLABORATION WITH OTHER NFT PROJECTS
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
                  PHASE 5: (Mature Pupa) Day 21
                </h4>

                <p className="roadmapText">SECOND MINT</p>
                <p className="roadmapText">
                  50% MINT OF SECOND MINT- Live Discord and Twitch party + Merch
                  Giveaway
                </p>
                <p className="roadmapText">
                  20,000 discord (10 beez)/30,000 discord (10 beez)/45,000
                  discord (10 beez)
                </p>
                <p className="roadmapText">
                  100% MINT OF SECOND MINT- FORM OF COMMUNITY DAO
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
                <h4 className="roadmapBoxTitle">PHASE 6: (Adult) Day 21</h4>

                <p className="roadmapText">NFT GAME BETA</p>

                <p className="roadmapText">
                  Discord process of deciding how to spend Community dao
                </p>

                <p className="roadmapText">
                  OG Minters only exclusive Twitch release party of NFT BETA
                  Play-to-Earn game + 5 sol giveaway
                </p>

                <p className="roadmapText">
                  10 OG Minter will receive $100 in game credit
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
                  PHASE 7: METAVERSE (Pollination Exploration) Day 21
                </h4>

                <p className="roadmapText">
                  Public Release of Needz Beez Play-to-Earn game
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
