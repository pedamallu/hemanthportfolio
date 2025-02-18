import React from "react";
import "./About.scss";
//import EducationCard from "../../components/educationCard/EducationCard";
import {about} from "../../portfolio";

export default function About() {
  return (
    <div className="about-section" id="education">
      <h1 className="about-heading">About Me</h1>
      <div className="education-card-container">
        {/* <p style={{textAlign: "justify"}}>{about.description}</p> */}
        {about.description.split("\n\n").map((para, index) => (
          <p key={index} style={{textAlign: "justify"}}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
  //return null;
}
