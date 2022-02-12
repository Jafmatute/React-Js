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
});
