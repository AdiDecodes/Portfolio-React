import "./main.css";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Aboutme = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  let navigate = useNavigate();
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
      <div className="about-me">
        <div className="ab-leftheading" data-aos="fade-up" data-aos-once="true">
          About Me
        </div>
        <div className="profile-container">
          <div className="profile-card" data-aos="fade-up" data-aos-once="true">
            <img
              src="https://res.cloudinary.com/customzone-app/image/upload/v1671529642/WebImages/profile_s4h8hb.jpg"
              alt=""
            />
          </div>
          <div className="profile-container-right" data-aos="fade-up">
            <h4>ADITYA SINGH</h4>
            <h4>B.E Data Science | Programming Enthusiast | Web developer</h4>
          </div>
        </div>
        <div className="ab-des" data-aos="fade-up" data-aos-once="true">
          Hi there! My name is{" "}
          <span style={{ fontSize: "2rem", color: "orange" }}>
            Aditya Singh
          </span>{" "}
          <br />A learning{" "}
          <span style={{ fontSize: "2rem", color: "orange" }}>
            Data Scientist
          </span>{" "}
          having some skills in the particular field. Along with that, I have
          interest in web development with a passion for creating visually
          stunning and intuitive websites. I have a strong background in{" "}
          <span style={{ fontSize: "2rem", color: "orange" }}>Javascript</span>{" "}
          & its library and have experience working in different projects for
          different needs. Outside of my professional work, I am constantly
          learning and staying up-to-date with the latest{" "}
          <span style={{ fontSize: "2rem", color: "orange" }}>
            web development
          </span>{" "}
          trends and technologies. In my free time, you can find me tinkering
          with new frameworks and tools, or collaborating with fellow developers
          on{" "}
          <span style={{ fontSize: "2rem", color: "orange" }}>
            open source projects
          </span>{" "}
          . I am excited to bring my skills and experience to new challenges and
          am always looking for opportunities to collaborate and create amazing
          websites.
        </div>
        <div
          className="title"
          style={{ color: "white" }}
          data-aos="fade-up"
          data-aos-once="true"
        >
          SKILLS
        </div>
        <div className="skill-icons" data-aos-once="true">
          <div
            className="rounded-card"
            title="ReactJS"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <FaReact className="icon"></FaReact>
          </div>
          <div
            className="rounded-card"
            title="NextJS"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <TbBrandNextjs className="icon"></TbBrandNextjs>
          </div>
          <div
            className="rounded-card"
            title="Java"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <FaJava className="icon"></FaJava>
          </div>
          <div
            className="rounded-card"
            title="MongoDB"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <DiMongodb className="icon"></DiMongodb>
          </div>
          <div
            className="rounded-card"
            title="HTML"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <IoLogoHtml5 className="icon"></IoLogoHtml5>
          </div>
          <div
            className="rounded-card"
            title="CSS"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
          >
            <IoLogoCss3 className="icon"></IoLogoCss3>
          </div>
          <div
            className="rounded-card"
            title="Javascript"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-once="true"
          >
            <IoLogoJavascript className="icon"></IoLogoJavascript>
          </div>
        </div>
      </div>
      <div
        className="footer"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="800"
      >
        <div className="innerdiv">
          <div className="container-footer">
            <div className="text">Having Any Project in Mind?</div>
            <div
              onClick={() => {
                navigate("/contact");
              }}
              className="push-button"
            >
              Drop a 'Hello'
            </div>
          </div>
          <div className="social">
            <a href="https://instagram.com/_.adityyaa" target="!blank">
              <div className="social-icon">Instagram</div>
            </a>
            <a
              href="https://www.linkedin.com/in/singhaditya18/"
              target="!blank"
            >
              <div className="social-icon">LinkedIn</div>
            </a>
            <a href="https://github.com/AdiDecodes" target="!blank">
              <div className="social-icon">Github</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
