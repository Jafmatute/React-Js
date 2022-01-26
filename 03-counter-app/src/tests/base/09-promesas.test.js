/** @format */

import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../base/data/hero";

describe("Pruebas en el archivo 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un Héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("getHeroeByIdAsync debe de retornar un error si el héroe no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
