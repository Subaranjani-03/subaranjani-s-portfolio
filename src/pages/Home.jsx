import React from "react";
import "./Home.css";
import SocialIcons from "../components/SocialIcons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-page">
        {/* home-content */}
        <div className="home-content">
          <h1>
            Hi, I'm <span className="my-name">Subaranjani</span>
          </h1>
          <h2 className="typing-text">Mern Stack Developer</h2>
          <p>
            I develop full-stack web applications using the MERN stack, focusing
            on performance, scalability, and user-friendly design.
          </p>
          <div className="home-buttons">
            <Link to="/project">
              <button className="project-btn">View Projects</button>
            </Link>
          </div>
        </div>

        {/* home-img */}
        <div className="home-img">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>

          {/* home-icon */}
          <SocialIcons />
        </div>
        <div className="blob3">
          <h3>3+</h3>
          <p>Projects</p>
        </div>
        <div className="blob4">
          <h3>10+</h3>
          <p>Tech Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
