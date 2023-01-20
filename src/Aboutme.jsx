import "./css/Aboutme/main.css";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Aboutme = () => {
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
        <div className="about-me">
          <div className="ab-leftheading">About Me</div>
          <div className="profile-container">
            <div className="profile-card">
              <img
                src="https://res.cloudinary.com/customzone-app/image/upload/v1671529642/WebImages/profile_s4h8hb.jpg"
                alt=""
              />
            </div>
            <div className="profile-container-right">
              <h4>ADITYA SINGH</h4>
              <h4>B.E Data Science | Programming Enthusiast | Web developer</h4>
            </div>
          </div>
          <div className="ab-des">
            Hi there! My name is{" "}
            <span style={{ fontSize: "2rem", color: "orange" }}>
              Aditya Singh
            </span>{" "}
            <br />A learning Data Scientist having some skills in the particular
            field. Along with that, I have interest in web development with a
            passion for creating visually stunning and intuitive websites. I
            have a strong background in Javascript & its library and have
            experience working in different projects for different needs.
            Outside of my professional work, I am constantly learning and
            staying up-to-date with the latest web development trends and
            technologies. In my free time, you can find me tinkering with new
            frameworks and tools, or collaborating with fellow developers on
            open source projects. I am excited to bring my skills and experience
            to new challenges and am always looking for opportunities to
            collaborate and create amazing websites.
          </div>
          <div className = "">

          </div>
        </div>
      </m.div>
    </>
  );
};

export default Aboutme;
