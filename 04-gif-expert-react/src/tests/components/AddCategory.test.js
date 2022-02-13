import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componeten <AddCategory />', () => {
  const setCategorias = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
  });

  test('Verificar el componente se renderice', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });

    //   expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de postear la información submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategorias).not.toHaveBeenCalled();
    //si deseo se hubiese llamado
    //expect(setCategorias).toHaveBeenCalled();
  });

  test('Debe de llamar el setCategoria y limpiar la caja de texto', () => {
    const value = 'Hola Mundo';

    //1. Simular el inputChange
    wrapper.find('input').simulate('change', { target: { value } });

    //2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    //3. Setcagegorias se de haber llamado
    // expect(setCategorias).toHaveBeenCalled();
    //   expect(setCategorias).toHaveBeenCalledTimes(2);
    expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));

    //.4 el Valor del input debe de estar vacío ''
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
