import React from "react";

import "./App.css";

function App() {
  return (
    <body>
      <div className="section1-container">
        <div className="section1">
          <h1 className="mainTitle">Anthony Tostado</h1>
          <p className="mainPara">
            Welcome! take a look around...make yourself at home.
          </p>
          <h2 className="scroll">Scroll</h2>
        </div>
      </div>
      <div className="section2">
        <h1 className="aboutTitle">About Me</h1>
        <p className="aboutPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempor arcu sed lectus tincidunt lacinia. Praesent nec eros ex. Fusce
          eu laoreet nunc. Praesent ligula urna, rutrum eu est et, fermentum
          molestie sapien. Praesent et lectus placerat, varius massa in, finibus
          arcu. Ut fringilla felis at enim semper, at eleifend turpis accumsan.
          Quisque suscipit ultrices purus sit amet dignissim. Sed faucibus, nisl
          vel bibendum consequat, velit sem porta nibh, ac pellentesque ante
          purus at nunc. Etiam tincidunt orci justo, in faucibus lorem ultrices
          sit amet. Quisque ex ipsum, venenatis in tempor eget, iaculis vel
          lorem.{" "}
        </p>
      </div>
      <div className="section3">
        <h1 className="projectTitle">Projects</h1>
        <div className="projectContent">
          <div className="card1">
            <img
              className="cardImage"
              src={require("../src/img/640x360.png")}
            ></img>
            <h1 className="cardTitle">The Gallery</h1>
            <section className="icons">
              <i class="fab fa-html5 fa-2x"></i>
              <i class="fab fa-css3-alt fa-2x"></i>
              <i class="fab fa-js fa-2x"></i>
            </section>
          </div>
          <div className="card2">
            <img
              className="cardImage"
              src={require("../src/img/640x360.png")}
            ></img>
            <h1 className="cardTitle">Overwatch Comic</h1>
            <section className="icons">
              <i class="fab fa-html5 fa-2x"></i>
              <i class="fab fa-css3-alt fa-2x"></i>
              <i class="fab fa-js fa-2x"></i>
            </section>
          </div>
          <div className="card3">
            <img
              className="cardImage"
              src={require("../src/img/640x360.png")}
            ></img>
            <h1 className="cardTitle">Restaurant Template</h1>
            <section className="icons">
              <i class="fab fa-html5 fa-2x"></i>
              <i class="fab fa-css3-alt fa-2x"></i>
              <i class="fab fa-js fa-2x"></i>
            </section>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
