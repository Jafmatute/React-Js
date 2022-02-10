import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas al componente <GifGridItem />', () => {
  test('Debe renderizar el componente correctamente <GifGridItem /', () => {
    const title = 'Buscando empleo';
    const url = 'https://google.com';

    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
