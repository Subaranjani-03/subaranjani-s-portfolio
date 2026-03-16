import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  // Default is dark mode
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    // Toggle both classes
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    // Update state for icon
    setIsDark(!isDark);
  };

  return (
    <header>
      <div className="head">
        <div className="logo">
          <img src="./src/image/head1.png" alt="Subaranjani" />
        </div>

        <i
          className={`theme-icon ${isDark ? "fa-regular fa-sun" : "fa-regular fa-moon"}`}
          onClick={toggleTheme}
        ></i>
      </div>
    </header>
  );
};

export default Header;
