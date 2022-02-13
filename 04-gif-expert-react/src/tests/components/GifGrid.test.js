import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
  const categoria = 'one Punch';

  test('Probar que renderice el componente correctamente', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imagénes useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https:/google.com',
        title: 'test',
      },
      {
        id: 'abcdd',
        url: 'https:/facebook.com',
        title: 'test',
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    const wrapper = shallow(<GifGrid categoria={categoria} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
