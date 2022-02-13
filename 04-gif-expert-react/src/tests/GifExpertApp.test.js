import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
  test('Probar que el componente se renderice correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorías', () => {
    const categorias = ['one punch', 'Dragon ball'];
    const wrapper = shallow(<GifExpertApp defaultCategorias={categorias} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categorias.length);
  });
});
