# useRef

useRef is a hook that is used for a value that is not needed for rendering (insted of useState). That is how we are able to have access to this new value

## Syntax

```JS
import { useState, useRef } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);

    // to access the value we need the property .current
    countRef.current++;

    console.log('State: ', count); //output -> 0
    // count is 0 to have access to the new value we need a new re-render

    console.log('Ref: ', countRef.current); // output -> 1
    // countRef doesn't trigger a new re-render, and we have instantly access to the new value, without wait a new re-render
  };

<!-- --------------------------------- ------------------------------------>
  return (
    // It's NOT recommended use, Ref inside the return

    <div className="p-3 bg-emerald-800">
      <h1>count: {countRef.current}</h1>
      <button onClick={() => handleIncrement()}>increment</button>
    </div>
  );
  // countref.current will be always the same value until a new re-render
}
```

<hr>

## useRef to manipulate the DOM

```js
import { useEffect, useRef } from 'react';

export default function App() {
  const inputRef = (useRef < HTMLInputElement) | (null > null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="p-3 bg-emerald-800">
      <input ref={inputRef} type="text" placeholder="exaple" />
    </div>
  );
}
```

> In this case we use Ref to focus the Input at the mount of the component for a better UX, using the useEffect() to help us
