import logo from "./logo.svg";
import { React, useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div
        className="main-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "300%",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "-15%",
        }}
      >
        <div
          className="counter"
          style={{ fontSize: "120%", position: "relative", top: "10vh" }}
        >
          <h1>{counter}</h1>
        </div>
        <div className="buttons">
          <button
            onClick={increment}
            style={{
              fontSize: "60%",
              position: "relative",
              top: "10vh",
              marginRight: "5px",
              backgroundColor: "#B1B1B1",
              borderRadius: "8%",
              width: 100,
              color: "white",
            }}
          >
            +
          </button>
          <button
            onClick={decrement}
            style={{
              fontSize: "60%",
              position: "relative",
              top: "10vh",
              width: 100,
              marginLeft: "5px",
              backgroundColor: "#B1B1B1",
              borderRadius: "8%",
              color: "white",
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
