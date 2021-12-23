import React from "react";
import "../styles/footer.css";
import discord from "../assets/discord.svg";
import youtube from "../assets/youtube.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div id="footerComponent">
      <h1 id="footerTitle">NFT TITLE</h1>
      <div id="footerIconContainer">
        <img src={discord} alt="" className="footerIcon" />
        <img src={youtube} alt="" className="footerIcon" />
        <img src={twitter} alt="" className="footerIcon" />
        <img src={insta} alt="" className="footerIcon" />
      </div>
      {/* <p id="footerPara">© 2021 Cool Club. All rights reserved.</p> */}
    </div>
  );
};

export default Footer;
