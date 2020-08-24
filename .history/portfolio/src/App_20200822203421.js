import React from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="body">
        <img className="image" src={require("../src/img/8_28_orig.png")} />
        <div className="section1">
          <h1 className="mainTitle">ANTHONY TOSTADO</h1>
          <p className="mainPara">
            Welcome! take a look around...make yourself at home.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
