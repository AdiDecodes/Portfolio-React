import React, { useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 750, easing: "ease-in-out" });
  }, []);
  return (
    <>
      <div className="primary">
        <div className="primaryContainer">
          <div
            className="primaryleft"
            data-aos="slide-right"
            data-aos-once="true"
          >
            <div>HEY THERE, I AM</div>
            <span className="span-name">
              <Typewriter
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={1000}
                words={[
                  "Aditya Singh",
                  "Web developer",
                  "Java Developer",
                  "Programming Enthusiast",
                ]}
              />
            </span>
            <div className="about"></div>
          </div>
          <div className="primaryright">
            <div className="innernav">
              <Link to="/aboutme">
                <div
                  className="textsection"
                  data-aos="slide-left"
                  data-aos-once="true"
                >
                  ABOUT ME
                </div>
              </Link>
              <Link to="/contact">
                <div
                  className="textsection"
                  data-aos="slide-left"
                  data-aos-once="true"
                >
                  CONTACT
                </div>
              </Link>
              <Link to="/project">
                <div
                  className="textsection"
                  data-aos="slide-left"
                  data-aos-once="true"
                >
                  PROJECTS
                </div>
              </Link>
            </div>
            <div className="footer-1" data-aos="slide-up" data-aos-once="true">
              <div>
                <a href="https://github.com/AdiDecodes" target="!blank">
                  <AiFillGithub style={{ fontSize: "2.3rem" }} />
                </a>
                <a href="https://www.instagram.com/_.adityyaa" target="!blank">
                  <BsInstagram style={{ fontSize: "2.3rem" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/singhaditya18/"
                  target="!blank"
                >
                  <AiFillLinkedin style={{ fontSize: "2.3rem" }} />
                </a>
                <a href="mailto:aditya@cleverstudio.in">
                  <AiOutlineMail style={{ fontSize: "2.3rem" }} />
                </a>
              </div>
              <div className="about-text">
                Made with{" "}
                <span style={{ color: "#FF0000", fontSize: "1.4rem" }}>❤️</span>{" "}
                By Aditya
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
