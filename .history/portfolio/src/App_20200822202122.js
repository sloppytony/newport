import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  render (){
    return ({
<>
      <div className="body">
        <img className="image" src={require("../src/img/8_28_orig.png")} />
      </div>

      <div className="section1">
        <h1 className="mainTitle">ANTHONY TOSTADO</h1>
        <p className="mainPara">
          Welcome! take a look around...make yourself at home.
        </p>
      </div>
    </>
    })
  };

export default App;
