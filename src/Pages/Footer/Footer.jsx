import React from "react";
import "./main.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Sign from "../../assets/signature.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-innerdiv">
          <h1>Connect with Me</h1>
          <div className="socials">
            <a href="https://github.com/AdiDecodes" target="!blank">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/_.adityyaa/" target="!blank">
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/singhaditya18/"
              target="!blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="sign">
          <img src={Sign} />
          <p>
            Made with{" "}
            <span style={{ color: "#FF0000", fontSize: "1.5rem" }}>♥</span> By
            Aditya
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
