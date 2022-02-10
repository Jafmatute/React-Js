import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas al componente <GifGridItem />', () => {
  //Test component
  const title = 'Buscando empleo';
  const url = 'https://google.com';

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe renderizar el componente correctamente <GifGridItem /', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parráfo con el title', () => {
    const parrafo = wrapper.find('p');
    expect(parrafo.text().trim()).toBe(title);
  });

  test('Debe de tener la imagen al URL y Alt de los props', () => {
    const img = wrapper.find('img');
    // console.log(img.props().src);
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    // console.log(div.hasClass('animate__fadeIn'));
    const className = div.prop('className');
    // expect(className.includes('animate__fadeIn')).toBe(true);
    expect(div.hasClass('animate__fadeIn')).toBe(true);
  });
});
