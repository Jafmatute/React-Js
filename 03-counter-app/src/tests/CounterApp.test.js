/** @format */

import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el archivo CounterApp", () => {
  test("debe de mostrar <CounterApp /> correctamente", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrarl el valor por defecto de 100", () => {
    const valor = 100;

    const wrapper = shallow(<CounterApp value={valor} />);
    const textoParrafo = wrapper.find("h2").text().trim();

    expect(Number(textoParrafo)).toBe(valor);
  });
});
