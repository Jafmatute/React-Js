/** @format */
import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en el componente <PrimeraApp />", () => {
  test("debe de mostrar el mensaje: Hola, soy Goku", () => {
    const saludo = "Hola, soy Goku";

    const { getByText } = render(<PrimeraApp msg={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
