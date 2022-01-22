/** @format */
import React from "react";
import PropTypes from "prop-types";

//FC => Functional components

const PrimeraApp = ({ msg, subtitulo }) => {
  const saludo = `Bienvenido`;

  return (
    <React.Fragment>
      <h1>Hola Mundo, {msg}</h1>
      <p> {subtitulo}</p>
    </React.Fragment>
  );
};

PrimeraApp.propTypes = {
  msg: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "React Js default props",
};

export default PrimeraApp;
