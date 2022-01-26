/** @format */

import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en el archivo 07-deses-arr", () => {
  test("debe de retornar un string y un número", () => {
    const arr = retornaArreglo();

    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");

    //expect(arr).toEqual(["ABC", 123]);
  });
});
