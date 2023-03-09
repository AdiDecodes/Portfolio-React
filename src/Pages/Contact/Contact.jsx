import "./main.css";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
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
      <div className="contact-main">
        <div className="contact-left">
          <div className="left-socials">
            <div className="social">
              <a href="https://www.instagram.com/_.adityyaa/" target="!blank">
                <AiOutlineInstagram />
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/singhaditya18/"
                target="!blank"
              >
                <AiOutlineLinkedin />
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/AdiDecodes/" target="!blank">
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="form-parent">
            <div className="form-main">
              <div className="innerleft">
                <div className="inner-heading">
                  Got Ideas? We've got <br />
                  the skills. Let's Team Up.
                </div>
                <div className="desc">
                  Tell us more about yourself and about the idea.
                </div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="E-Mail" />
                <input
                  type="text"
                  placeholder="Message / Tell us little about your project . . ."
                />
              </div>
              <div className="innerright">
                <div type="submit" className="class-innersend">
                  <h4>Let's get started</h4>
                  <BiSend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
