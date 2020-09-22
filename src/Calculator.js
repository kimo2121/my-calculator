import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number, setNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [sign, setSign] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setNumber(parseFloat(number + e.target.value));
    // console.log(number + e.target.value);
  };

  const operationClick = (e) => {
    e.preventDefault();
    setOperation(parseFloat(number || "Error"));
    setSign(number ? e.target.value : "Error");
    setNumber("");
    // console.log(e.target.value);
  };

  const res = () => {
    switch (sign) {
      case "+":
        setNumber(parseFloat(operation + number));
        break;
      case "-":
        setNumber(parseFloat(operation - number));
        break;
      case "×":
        setNumber(parseFloat(operation * number));
        break;
      case "÷":
        setNumber(parseFloat(operation / number));
      default:
        break;
    }
  };

  const Clear = (e) => {
    e.preventDefault();
    setNumber("");
  };
  const ClearAll = (e) => {
    e.preventDefault();
    setNumber("");
    setOperation("");
    setSign("");
  };
  const Backspace = (e) => {
    e.preventDefault();
    setNumber(Math.floor(number / 10));
  };
  const SQRT2 = (e) => {
    e.preventDefault();
    setNumber(Math.sqrt(number));
  };
  const Signal = (e) => {
    e.preventDefault();

    setNumber(-Number(number));
  };
  const percent = (e) => {
    e.preventDefault();
    setNumber(number / 100);
  };
  const Power = (e) => {
    e.preventDefault();
    setNumber(Math.pow(number, 2));
  };
  const underx = (e) => {
    e.preventDefault();
    setNumber(1 / number);
  };
  const Dot = (e) => {
    e.preventDefault();
    setNumber(number + ".");
  };

  return (
    <div className="container">
      <div className="display">
        <div className="res">
          <label className="label">
            <h1>{number || Number(0)} </h1>
            <p>
              {operation} <span>{sign && sign}</span>
            </p>
          </label>
        </div>
      </div>
      <div className="line">
        <div className="btn-c">
          <button onClick={percent} className="myButton">
            %
          </button>
          <button onClick={Clear} className="myButton">
            CE
          </button>
          <button onClick={ClearAll} className="myButton">
            C
          </button>
          <button onClick={Backspace} className="myButton">
            ⌦
          </button>
        </div>
        <div className="btn-card0">
          <button onClick={underx} className="myButton">
            ¹∕𝑥
          </button>
          <button onClick={Power} className="myButton">
            𝒳^2
          </button>
          <button onClick={SQRT2} value={"√"} className="myButton">
            √
          </button>
          <button value={"÷"} onClick={operationClick} className="myButton">
            ÷
          </button>
        </div>
        <div className="btn-card1">
          <button value={7} onClick={handleClick} className="myButton">
            7
          </button>
          <button value={8} onClick={handleClick} className="myButton">
            8
          </button>
          <button value={9} onClick={handleClick} className="myButton">
            9
          </button>
          <button value={"×"} onClick={operationClick} className="myButton">
            ×
          </button>
        </div>
        <div className="btn-card2">
          <button value={4} onClick={handleClick} className="myButton">
            4
          </button>
          <button value={5} onClick={handleClick} className="myButton">
            5
          </button>
          <button value={6} onClick={handleClick} className="myButton">
            6
          </button>
          <button value={"-"} onClick={operationClick} className="myButton">
            -
          </button>
        </div>
        <div className="btn-card3">
          <button value={1} onClick={handleClick} className="myButton">
            1
          </button>
          <button value={2} onClick={handleClick} className="myButton">
            2
          </button>
          <button value={3} onClick={handleClick} className="myButton">
            3
          </button>
          <button value={"+"} onClick={operationClick} className="myButton">
            +
          </button>
        </div>
        <div className="btn-card4">
          <button value={"±"} onClick={Signal} className="myButton">
            ±
          </button>
          <button value={0} onClick={handleClick} className="myButton">
            0
          </button>
          <button value={"."} onClick={Dot} className="myButton">
            .
          </button>
          <button onClick={res} className="myButton">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
