import React from "react";
import "./css/App.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skill-heading">SKILLS</div>
        <div className="skill-content">
          <div className="skill-card" style={{ color: "#F06529" }}>
            <AiFillHtml5 size="4.4rem" />
          </div>
          <div className="skill-card" style={{ color: "#4078c0" }}>
            <DiCss3 size="4.4rem" />
          </div>
          <div className="skill-card" style={{ color: "#6cc644" }}>
            <SiJavascript size="4.4rem" />
          </div>
          <div className="skill-card" style={{ color: "#E78625" }}>
            <FaJava size="4.4rem" />
          </div>
          <div className="skill-card" style={{ color: "#61DBFB" }}>
            <FaReact size="4.4rem" />
          </div>
          <div className="skill-card" style={{ color: "#553C7B" }}>
            <DiBootstrap size="4.4rem" />
          </div>
          <div className="skill-card" style={{ color: "#333" }}>
            <DiGithubBadge size="4.4rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
