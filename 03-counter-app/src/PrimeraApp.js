/** @format */
import React from "react";
import PropTypes from "prop-types";

//FC => Functional components

const PrimeraApp = ({ msg, subtitulo }) => {
  const saludo = `Bienvenido`;

  return (
    <React.Fragment>
      <h1>{msg}</h1>
      <p>{subtitulo}</p>
    </React.Fragment>
  );
};

PrimeraApp.propTypes = {
  msg: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Subtitulo",
};

export default PrimeraApp;
