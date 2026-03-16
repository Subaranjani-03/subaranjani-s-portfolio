import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </div>
    </>
  );
}

export default App;
