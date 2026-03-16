import React from "react";

const ProjectCard = ({ img, tech, title, desc, link }) => {
  return (
    <div className="projectCard">
      <div className="card-top">
        <img src={img} alt={title} />
      </div>

      <div className="card-bottom">
        <h5>{tech}</h5>
        <h2>{title}</h2>
        <p>{desc}</p>

        <a href={link} target="_blank" className="live-btn">
          Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
