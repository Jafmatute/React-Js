/** @format */

import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../base/data/hero";

describe("Pruebas en el archivo 08-imp-exp", () => {
  test("debe de retornar un héroe por id", () => {
    const id = 1;

    const heroeData = heroes.find((heroe) => heroe.id === id);

    const heroe = getHeroeById(id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar un undefined sí el Héroe no existe", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo con los Héroes de DC", () => {
    const owner = "DC";

    const heroesData = heroes.filter((heroe) => heroe.owner === owner);

    const heros = getHeroesByOwner(owner);

    expect(heros).toEqual(heroesData);
  });

  test("Debe de retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";

    const heros = getHeroesByOwner(owner);

    expect(heros.length).toBe(2);
  });
});
