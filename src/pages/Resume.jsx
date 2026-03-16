import React from "react";
import "./Resume.css";
import ResumeCard from "./ResumeCard";
import Education from "./Education";

const Resume = () => {
  return (
    <div className="resume">
      <section className="resume-page">
        <h2 className="resume-title">Qualification</h2>

        <div className="timeline">
          {/* ABOUT */}
          <div className="timeline-item left">
            <div className="content">
              <h3>About Me</h3>

              <ul className="about-list">
                <li>
                  <strong>Name:</strong> Subaranjani R
                </li>
                <li>
                  <strong>Email:</strong> subaranjani0304@gmail.com
                </li>
                <li>
                  <strong>Location:</strong> Trichy, Tamil Nadu, India
                </li>
              </ul>
            </div>
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div className="timeline-item right">
            <div className="content">
              <h3>Professional Summary</h3>

              <ul className="about-list">
                <li>
                  Detail-oriented MERN Stack Developer with strong knowledge of
                  modern web technologies.
                </li>
                <li>
                  Experienced in building responsive web applications using
                  React, JavaScript, and clean UI design.
                </li>
              </ul>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="timeline-item left">
            <div className="content">
              <h3>Education</h3>

              <div className="education">
                <Education />
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="timeline-item right">
            <div className="content">
              <h3>Projects</h3>

              <ResumeCard
                title="Visionary Specs"
                description="Responsive eyewear website designed to showcase different styles of glasses and frames with a clean layout and modern UI."
                tech={["HTML", "CSS"]}
              />

              <ResumeCard
                title="Wanderly Travel"
                description="Responsive travel website built to explore popular destinations, featuring attractive layouts, travel sections, and a user-friendly interface."
                tech={["Bootstrap"]}
              />

              <ResumeCard
                title="UrbanBags"
                description="Responsive bag shopping website with product listings, stylish layouts, and interactive elements to simulate an e-commerce experience."
                tech={["HTML", "CSS", "JS"]}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="resume-preview">
        <h2 className="resume-title">My Resume</h2>
        <iframe src="Subaranjani-cv.pdf" title="Resume"></iframe>
      </div>
    </div>
  );
};

export default Resume;
