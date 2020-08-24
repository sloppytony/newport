import React from "react";

import "./App.css";

function App() {
  return (
    <body>
      <div className="everything">
        <div className="section1">
          <h1 className="mainTitle">Anthony Tostado</h1>
          <p className="mainPara">
            Welcome! take a look around...make yourself at home.
          </p>
          <h2 className="scroll">Scroll</h2>
        </div>
        <div className="section2">
          <h1 className="projectTitle">Projects</h1>
          <div className="projectContent">
            <div className="card">
              <img src={require("../src/img/640x360.png")}></img>
              <h1 className="cardTitle">Project 1</h1>
              <i class="fab fa-html5 fa-2x"></i>
              <i class="fab fa-css3-alt fa-2x"></i>
              <i class="fab fa-js fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
