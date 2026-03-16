import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="connect-icon">
      <a href="https://github.com/Subaranjani-03" target="_blank">
        <i className="fa-brands fa-github connect"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/subaranjani-rajkumar-418b01289"
        target="_blank"
      >
        <i className="fa-brands fa-square-linkedin connect"></i>
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=subaranjani0304@gmail.com&su=Hiring%20Opportunity&body=Hello%20Subaranjani,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank"
      >
        <i className="fa-solid fa-envelope connect"></i>
      </a>
      <a
        href="https://wa.me/919944542136?text=Hello%20Subaranjani%20I%20saw%20your%20portfolio"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp connect"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
