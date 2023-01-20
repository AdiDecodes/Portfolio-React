import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { motion as m } from "framer-motion";
const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mainHeader">
        <div className="leftHeader">
          <Link to="/" className="heading-style">
            ADITYA SINGH
          </Link>
        </div>
        <div className="rightHeader-l">
          <Link to="/Aboutme">ABOUT ME</Link>
          <Link to="/Contact">CONTACT</Link>
          <Link to="/Resume">RESUME</Link>
          <Link to="/work">WORKS</Link>
        </div>
      </div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <div className="work-main">
          <div className="w-heading">Works / Projects</div>
          <div className="work-subheading">
            These are some of the works I've created, Have A Look!
          </div>
          <div className="work-container">
            <div className="work-cardimg">VIDZY - Fast Video Saver</div>
            <div className="work-right">
              <div className="work-des">
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum, culpa? Maiores odio molestias obcaecati minus nulla,
                  sed similique? Aut, voluptatem! Voluptatibus accusamus, unde
                  cum omnis minus explicabo sint consequatur minima?
                </h3>
              </div>
              <a
                href="https://adidecodes.github.io/Vidzy"
                target="!blank"
                className="works-link"
              >
                <BsFillArrowUpRightSquareFill />
                <h3>Visit Site</h3>
              </a>
            </div>
          </div>
          <div className="work-container">
            <div className="work-cardimg">
              SKYCLOUD - Realtime Weather Information
            </div>
            <div className="work-right">
              <div className="work-des">
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum, culpa? Maiores odio molestias obcaecati minus nulla,
                  sed similique? Aut, voluptatem! Voluptatibus accusamus, unde
                  cum omnis minus explicabo sint consequatur minima?
                </h3>
              </div>
              <a
                href="https://adidecodes.github.io/Skycloud"
                target="!blank"
                class="works-link"
              >
                <BsFillArrowUpRightSquareFill />
                <h3>Visit Site</h3>
              </a>
            </div>
          </div>
          <div className="work-container">
            <div className="work-cardimg">SuperBattle - Esports Fantasy</div>
            <div className="work-right">
              <div className="work-des">
                <h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nostrum, culpa? Maiores odio molestias obcaecati minus nulla,
                  sed similique? Aut, voluptatem! Voluptatibus accusamus, unde
                  cum omnis minus explicabo sint consequatur minima?
                </h3>
              </div>
              <a
                href="https://superbattle.in"
                target="!blank"
                className="works-link"
              >
                <BsFillArrowUpRightSquareFill />
                <h3>Visit Site</h3>
              </a>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Work;
