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
});
