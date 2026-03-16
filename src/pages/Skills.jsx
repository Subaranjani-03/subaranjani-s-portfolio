import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill-page">
      <div className="skills">
        <div className="frontend">
          <h1>Frontend</h1>
          <div className="skill-box front-skill">
            <div className="img">
              <img src="image/html.png" alt="html" />
              <p>HTML</p>
            </div>
            <div className="img">
              <img src="image/css.png" alt="css" />
              <p>CSS</p>
            </div>
            <div className="img">
              <img src="image/bootstrap.png" alt="bootstrap" />
              <p>BOOTSTRAP</p>
            </div>
            <div className="img">
              <img src="image/js.png" alt="javascript" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="img">
              <img src="image/jquery.png" alt="jquery" />
              <p>JQUERY</p>
            </div>
            <div className="img">
              <img src="image/react.png" alt="react" />
              <p>REACT JS</p>
            </div>
          </div>
        </div>
        <div className="backend">
          <h1>Backend</h1>
          <div className="skill-box back-skill">
            <div className="img">
              <img src="image/node.png" alt="node" />
              <p>NODE JS</p>
            </div>
            <div className="img">
              <img src="image/express2.png" alt="express" />
              <p>EXPRESS JS</p>
            </div>
            <div className="img">
              <img src="image/mongodb.png" alt="mongodb" />
              <p>MONGODB</p>
            </div>
          </div>
        </div>

        <div className="tools">
          <h1>Tools</h1>
          <div className="skill-box tool-skill">
            <div className="img">
              <img src="image/github2.png" alt="github" />
              <p>GITHUB</p>
            </div>
            <div className="img">
              <img src="image/vscode.png" alt="vscode" />
              <p>VS CODE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
