import React from 'react';

const Small = React.memo(({ value }) => {
  console.log('me volví a llamar ☺');
  return <small>{value}</small>;
});

export default Small;
