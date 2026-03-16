import React from "react";

const ResumeCard = ({ title, description, tech }) => {
  return (
    <div className="project-card">
      <h4>{title}</h4>

      <p>{description}</p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ResumeCard;
