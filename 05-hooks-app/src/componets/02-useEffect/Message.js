import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;

  useEffect(() => {
    //   console.info('Componente montado');
    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y };
      setCoors(coors);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      //   console.info('Componente desmontado');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <h2>Escribenos, te esperamos!</h2>
      <p>
        x: {x} --- y:{y}
      </p>
    </>
  );
};

export default Message;
