import React, { useMemo, useState } from 'react';
import ProcesoPesado from '../../helpers/procesoPesado';
import UseCounter from '../../hooks/UseCounter';

const MemoHook = () => {
  const { counter, increment } = UseCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcessPesado = useMemo(() => ProcesoPesado(counter), [counter]);
  return (
    <>
      <h1>Memo Hook</h1>
      <hr />

      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcessPesado}</p>

      <div className='d-flex'>
        <button onClick={increment} className='btn btn-primary mx-1'>
          +1
        </button>
        <button onClick={() => setShow(!show)} className='btn btn-warning'>
          show / Hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};

export default MemoHook;
