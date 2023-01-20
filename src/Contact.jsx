import "./css/Contact/main.css";
import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="mainHeader">
        <div className="leftHeader">
          <Link to="/" className="heading-style">
            ADITYA SINGH.
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
        <div className="contact-heading">CONTACT</div>
        <div className="contact-main">
          <div className="contact-left">
            <h1>
              Have a project in Mind?
              <br />
              Having Anything to discuss
            </h1>
            <div className="mailBtn">
              <a href="mailto:aditya@cleverstudio.in">
                <div className="Mailcontact">
                  <h3>aditya@cleverstudio.in</h3>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <div className="form-parent">
              <div className="form-main">
                <div className="innerleft">
                  <div className="inner-heading">Send Message</div>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="E-Mail" />
                  <input type="text" placeholder="Message" />
                </div>
                <div className="innerright">
                  <div type="submit" className="class-innersend">
                    <h4>SEND</h4>
                    <BiSend />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Contact;
