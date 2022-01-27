/** @format */

//import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en el componente <PrimeraApp />", () => {
  /*test("debe de mostrar el mensaje: Hola, soy Goku", () => {
    const saludo = "Hola, soy Goku";

    const { getByText } = render(<PrimeraApp msg={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });*/

  test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Goku";

    const wrapper = shallow(<PrimeraApp msg={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = "soy sayayin";

    const wrapper = shallow(<PrimeraApp msg={saludo} subtitulo={subtitulo} />);
    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
