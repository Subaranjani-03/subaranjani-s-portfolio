import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/Home">
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/About">
              <i className="fa-solid fa-user"></i>
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link to="/Skills">
              <i className="fa-solid fa-laptop-code"></i>
              <span>Skills</span>
            </Link>
          </li>

          <li>
            <Link to="/Project">
              <i className="fa-solid fa-rocket"></i>
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link to="/Resume">
              <i className="fa-solid fa-file-lines"></i>
              <span>Resume</span>
            </Link>
          </li>

          <li>
            <Link to="/Contact">
              <i className="fa-solid fa-envelope"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
