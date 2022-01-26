/** @format */

import { getImagen } from "../../base/11-async-await";

describe("Prueba en el archivo 11-async-await", () => {
  test("getImagen debe retornar el url de una imagen", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });
});
