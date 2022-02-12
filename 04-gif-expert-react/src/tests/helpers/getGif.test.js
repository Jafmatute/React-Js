import { getGif } from '../../helpers/getGifs';

describe('Pruebas con el componente getGifs Fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifts = await getGif('one punch');

    expect(gifts.length).toBe(10);
  });

  test('Verificar comportamiento si no se envia la categoría', async () => {
    const gits = await getGif('');

    expect(gits.length).toBe(0);
  });
});
