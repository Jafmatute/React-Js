/** @format */

import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el archivo CounterApp", () => {
  //Inicialozar pruebas (ciclo de vida)
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("debe de mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrarl el valor por defecto de 100", () => {
    const valor = 100;

    const wrapper = shallow(<CounterApp value={valor} />);
    const textoParrafo = wrapper.find("h2").text().trim();

    expect(Number(textoParrafo)).toBe(valor);
  });

  test("Debe incrementar el contador con el bóton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const textoButtom = wrapper.find("h2").text().trim();

    expect(Number(textoButtom)).toBe(11);
  });

  test("Debe decrementar el contador con el bóton -1", () => {
    const textoButtom = wrapper.find("h2").text().trim();
    wrapper.find("button").at(2).simulate("click");

    expect(Number(textoButtom)).toBe(10);
  });

  test("Debe colocar el valor por defecto con el bóton reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const textoButtom = wrapper.find("h2").text().trim();

    expect(Number(textoButtom)).toBe(105);
  });
});
