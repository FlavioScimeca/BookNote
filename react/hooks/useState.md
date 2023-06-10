# UseState

State is any piece of information that can change over time across renders in React

<hr />
UseState is the React hook to manipulate state
<hr/>
useState accepts an initial state and returns two values

- The current state.
- A function that updates the state.

<div style="height: 3px; background-color: darkred; margin-top: 10px" ></div>

## Syntax

```js
import { useState } from 'react';

export default function Demo() {
  const [count, setCount] = useState(initialValue);

  /*
    The first value, count is our current state.

    The second value, setCount, is the function that is used to update our state.
  */

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </>
  );
}
```

- _if we don't provide an initial value it will be **UNDEFINED**_

- To update our state, we use our state updater function.
  We should never directly update state. Ex: count = 10 is not allowed.

<div style="height: 3px; background-color: darkred; margin-top: 10px: ;  margin-bottom: 10px" ></div>

The **useState** Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

```js
import { useState } from 'react';

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  );
}
```

When state is **updated**, the entire state gets **overwritten**.

What if we only want to update the color of our car?

If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.  
<br>
We can use the JavaScript **spread operator** to help us

```js
setCar({ ...car, color: 'blue' });
```
