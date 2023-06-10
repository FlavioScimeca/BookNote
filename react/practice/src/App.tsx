import { useId } from 'react';
import { Component } from 'react';

export default function App() {
  const uid = useId();

  console.log(Component);

  return (
    <div>
      <label htmlFor={`${uid}-name`}>Name</label>
      <input id={`${uid}-name`} />
      <div>Generated unique user input id: {`${uid}-name`}</div>

      <label htmlFor={`${uid}-age`}>Age</label>
      <input id={`${uid}-age`} />

      <div>Generated unique age input id: {`${uid}-age`}</div>
    </div>
  );
}
