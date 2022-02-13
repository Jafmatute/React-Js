import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas al Hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    // const { data, loading } = useFetchGifs('one punch');

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('one punch')
    );

    const { data, loading } = result.current;

    //Data vacía y loading true
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debe de retonar un arreglo de imagenes', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('one punch')
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  }, 3000);
});
