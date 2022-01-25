/**
 * Mi primer test
 *  @format */

describe("Pruebas en el archivo demo.test.js", () => {
  test("deben ser iguales los string", () => {
    // 1. Inicialización
    const mensaje = "Hola Mundo";

    // Estímulo
    const mensaje2 = "Hola Mundo";

    // Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
