/** @format */

import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import "./index.css";

import PrimeraApp from "./PrimeraApp";

// const saludo = <h1>Hola Mundo</h1>;

//Referencia
const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp msg="Hola, soy Goku" />, divRoot);

//ReactDOM.render(<CounterApp value={10} />, divRoot);
