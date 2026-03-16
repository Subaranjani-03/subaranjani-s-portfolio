import React from "react";
import "./About.css";
import Education from "./Education";
import Stats from "./Stats";

const About = () => {
  const statsData = [
    {
      icon: "fa-solid fa-laptop-code",
      value: "3+",
      label: "Projects",
    },
    {
      icon: "fa-solid fa-code",
      value: "10+",
      label: "Technologies",
    },
    {
      icon: "fa-solid fa-user-tie",
      value: "1",
      label: "Internship",
    },
    {
      icon: "fa-solid fa-brain",
      value: "20+",
      label: "Concepts Learned",
    },
  ];

  return (
    <div className="about-page">
      <div className="about">
        <h1 className="about-title">About Me</h1>

        <div className="about-top">
          {/* Personal Info */}
          <div className="personal-info">
            <h3>Personal Information</h3>

            <div className="info-columns">
              {/* LEFT SIDE */}
              <div className="info-left">
                <p>
                  <strong>Name:</strong> Subaranjani R
                </p>
                <p>
                  <strong>Role:</strong> MERN Stack Developer
                </p>
                <p>
                  <strong>DOB:</strong> 03 April 2003
                </p>
                <p>
                  <strong>Phone:</strong> +91 99445 42136
                </p>

                {/* Download CV */}
                <a
                  href="./public/Subaranjani-cv.pdf"
                  download
                  className="download-btn"
                >
                  Download CV
                </a>
              </div>

              {/* RIGHT SIDE */}
              <div className="info-right">
                <p>
                  <strong>E-Mail:</strong> subaranjani0304@gmail.com
                </p>
                <p>
                  <strong>GitHub:</strong> github.com/Subaranjani-03
                </p>
                <p>
                  <strong>Location:</strong> Trichy, Tamil Nadu, India
                </p>
                <p>
                  <strong>Status:</strong> Open to Work
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="about-education">
            <h3>Education</h3>
            <Education />
          </div>
        </div>

        {/* Stats Component with Props */}
        <Stats stats={statsData} />
      </div>
    </div>
  );
};

export default About;
