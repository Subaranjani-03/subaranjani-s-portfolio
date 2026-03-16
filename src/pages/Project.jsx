import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      img: "image/proj2.jpg",
      tech: "HTML CSS",
      title: "Visionary Specs",
      desc: "Visionary Specs is a responsive eyewear website that showcases modern spectacle collections with a clean and user-friendly interface. It focuses on simple navigation and an attractive product display to provide a smooth browsing experience.",
      link: "https://visionary-specs-website.vercel.app/",
    },
    {
      img: "image/proj3.jpg",
      tech: "BOOTSTRAP",
      title: "Wanderly Travel",
      desc: "Wanderly Travel is a responsive travel website designed to showcase beautiful destinations and travel experiences. It provides a clean layout and simple navigation to explore different places and travel information easily.",
      link: "https://wanderly-travel-website.vercel.app/",
    },
    {
      img: "image/proj4.jpg",
      tech: "HTML CSS JS",
      title: "UrbanBags",
      desc: "UrbanBags is a responsive e-commerce website designed to showcase bags. It features a clean layout and navigation for browsing bag collections easily. The design focuses on a smooth shopping experience with a modern interface.",
      link: "https://urban-bags.vercel.app/",
    },
    {
      img: "image/proj5.png",
      tech: "HTML CSS JQUERY",
      title: "Employee Salary Management",
      desc: "A web-based application for managing employee records and salary details. It includes features like adding, editing, and deleting employee information with a clean interface. The system helps organize employee data and simplifies salary tracking.",
      link: "https://employee-salary-management.vercel.app/",
    }
  ];

  return (
    <div className="project-page">
      <div className="project">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            img={proj.img}
            tech={proj.tech}
            title={proj.title}
            desc={proj.desc}
            link={proj.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
