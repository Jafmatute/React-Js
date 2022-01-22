/** @format */
import React from "react";

//FC => Functional components

const PrimeraApp = ({ msg = null }) => {
  const saludo = `Bienvenido`;

  console.log(msg);
  return (
    <React.Fragment>
      <h1>Hola Mundo, {saludo}</h1>
      <p> Mi primer hola mundo en React JS</p>
    </React.Fragment>
  );
};

export default PrimeraApp;
