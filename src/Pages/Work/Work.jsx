import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import cs from "../../assets/cleverstudio.png";
import sb from "../../assets/superbattle.png";
import sc from "../../assets/skycloud.png";
import vz from "../../assets/vidzy.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
          <Link to="/project">PROJECTS</Link>
        </div>
      </div>
      <div className="work-main">
        <div className="w-heading">Projects</div>
        <div className="work-subheading">
          These are some of the projects I've created, Have A Look!
        </div>
        <div className="work-container" data-aos="fade-up" data-aos-once="true">
          <div className="work-cardimg">
            <img src={vz} alt="" />
          </div>
          <div className="work-right">
            <div className="main">
              <div className="work-title">Vidzy - Fast Video Saver</div>
              <div className="work-des">
                VIDZY is an online video downloading website which allows users
                to download videos from YouTube & Facebook. <br />
                Product Features: <br />- Free to join, no registration
                required. <br />- Download videos directly to your system <br />
                - No bandwidth limit. <br />- Videos can be downloaded as MP4
                files. <br />- [More features to be added soon]
              </div>
              <div className="tech-used-container">
                <div className="tech-layout">HTML</div>
                <div className="tech-layout">CSS</div>
                <div className="tech-layout">Vanilla JS</div>
              </div>
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
        <div className="work-container" data-aos="fade-up" data-aos-once="true">
          <div className="work-cardimg">
            <img src={sc} alt="" />
          </div>
          <div className="work-right">
            <div className="main">
              <div className="work-title">SkyCloud - Weather Forecast</div>
              <div className="work-des">
                Skycloud is a website that serves local weather information
                right when and where you want it. With Skycloud, you can see
                current conditions, forecasted temperatures of any city in the
                world. You'll be able to check out your local weather, or find
                out what&#39;s the weather! <br />
                <br />
                Features: <br />• Astronomical details (Sunrise, sunset) <br />•
                Auto Fetches current location's weather <br />• Region Details{" "}
                <br />• 7-Day Forecasts
              </div>
              <div className="tech-used-container">
                <div className="tech-layout">HTML</div>
                <div className="tech-layout">CSS</div>
                <div className="tech-layout">Bootstrap</div>
                <div className="tech-layout">Vanilla JS</div>
              </div>
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
        <div className="work-container" data-aos="fade-up" data-aos-once="true">
          <div className="work-cardimg">
            <img src={cs} alt="" />
          </div>
          <div className="work-right">
            <div className="main">
              <div className="work-title">CleverStudio - Media Agency</div>
              <div className="work-des">
                Cleverstudio is the media agency that helps small businesses or
                Individuals to get digital resources and assets that they
                require in this digital era.
              </div>
              <div className="tech-used-container">
                <div className="tech-layout">HTML</div>
                <div className="tech-layout">CSS</div>
                <div className="tech-layout">Vanilla JS</div>
              </div>
            </div>
            <a
              href="https://cleverstudio.in"
              target="!blank"
              className="works-link"
            >
              <BsFillArrowUpRightSquareFill />
              <h3>Visit Site</h3>
            </a>
          </div>
        </div>
        <div className="work-container" data-aos="fade-up" data-aos-once="true">
          <div className="work-cardimg">
            <img src={sb} alt="" />
          </div>
          <div className="work-right">
            <div className="main">
              <div className="work-title">SuperBattle - Esports Fantasy</div>
              <div className="work-des">
                SuperBattle is an Esports competitive platform that has multiple
                games available to play and compete with other players. Playing
                or participating also ensures that with this gaming skill you
                earn more as you play more!
              </div>
              <div className="tech-used-container">
                <div className="tech-layout">HTML</div>
                <div className="tech-layout">CSS</div>
                <div className="tech-layout">Vanilla JS</div>
              </div>
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
    </>
  );
};

export default Work;
