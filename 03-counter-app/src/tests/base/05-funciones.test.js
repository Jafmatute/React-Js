/** @format */

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebaa en el archivo 05-funciones.js", () => {
  test("Debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  //Usuario activo
  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "josue";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
