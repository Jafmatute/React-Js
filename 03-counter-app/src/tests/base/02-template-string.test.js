/** @format */

import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getSaludo debe retornar hola josue ", () => {
    const nombre = "Josue";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  //valor default.
  test("getSaludo debe de retornar Hola Invitado, si no hay argumento en el nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Invitado");
  });
});
