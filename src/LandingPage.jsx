import React from "react";
import "./LandingPage.css";
import kitchen from "./images/kitchen.jpg";
import bathroom from "./images/bathroom.jpg"
import lightning from "./images/lightning.jpg"


import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function LandingPage() {
  return (
    <>
      <nav className="navbar">
        LOGO
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">Categorise</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
        </ul>
      </nav>
      <div className="home-container">
        <div>
          <div className="home-content">
            <h1 className="heading">Minimilism at it's finest</h1>
            <div className="second-heading">
              <div className="line"></div>
              <span className="shop-all">shop all</span>
            </div>
            <div className="icons">
              <div className="social-icons">
                <AiFillFacebook className="social" />
                <AiFillInstagram className="social" />
                <AiOutlineTwitter className="social" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-images">
          <div className="images">
            <img src={kitchen} alt="" width={"auto"} height={"auto"} />
          </div>

          <div className="images">
            <img src={bathroom} alt="" />
          </div>

          <div className="images">
            <img src={lightning} alt="" height={"420px"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
