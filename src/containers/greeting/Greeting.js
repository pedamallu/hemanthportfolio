import React, {useContext} from "react";
import {Fade} from "react-reveal";
//import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
//import {illustration, greeting, about} from "../../portfolio";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h3
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h3>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              {/* <div className="education-card-container">
                <p style={{textAlign: "justify"}}>{about.description}</p>
              </div> */}
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* {greeting.resumeLink && ( */}
                {/* <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  > */}
                <Button
                  text="See my resume"
                  href={greeting.resumeLink}
                  newTab={true}
                />
                {/* </a> */}
                {/* )} */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : ( */}
            <img
              alt="headshot"
              src={require("../../assets/images/LinkedIn Headshot.jpeg")}
              className="profile-photo"
            ></img>
            {/* )} */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
