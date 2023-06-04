# useRef

useRef is a hook that accepts one argument as the initial value and returns a reference (aka ref) and

is used for a value that is not needed for rendering (insted of useState). That is how we are able to have access to this new value

## Syntax

> ## There are 2 rules to remember about references:

- The value of the reference is persisted (remains unchanged) between component re-renderings

- Updating a reference doesn't trigger a component re-rendering.

```js
import { useRef } from 'react';

function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  //In this case console.log is executed only once, because useRef does NOT trigger a new re-render
  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
}
```

<hr>

## useRef to manipulate the DOM

```ts
import { useEffect, useRef } from 'react';

export default function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="p-3 bg-emerald-800">
      <input ref={inputRef} type="text" placeholder="example" />
    </div>
  );
}
```

> In this case we use Ref to focus the Input at the mount of the component for a better UX, using the useEffect() to help us

<hr>

## 2 main differences between reference and state:

- Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render

- The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).

<hr>

```JS
import { useState, useRef } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);

    // reference.current accesses the reference value, and reference.current = newValue updates the reference value
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
      <h1>count: {countRef.current}</h1> <!-- Bad -->
      <button onClick={() => handleIncrement()}>increment</button>
    </div>
  );
  // countref.current will be always the same value until a new re-render
}
```

<hr>

## Example with useRef, useState, useEffect

```js
import { useEffect, useRef, useState } from 'react';

function App() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => {
      setCount((c) => c + 1), console.log('count updated');
    }, 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    console.log('1 render');
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default App;
```

<hr>

## Updating references restriction

- The function scope of the functional component should either calculate the output or invoke hooks.

- That's why updating a reference (as well as updating state) shouldn't be performed inside the immediate scope of the component's function.

- The reference must be updated either inside a useEffect() callback or inside handlers (event handlers, timer handlers, etc).

```js
import { useRef, useEffect } from 'react';

export default function App({ prop }) {
  const myRef = useRef(0);

  useEffect(() => {
    myRef.current++; // Good!

    setTimeout(() => {
      myRef.current++; // Good!
    }, 1000);
  }, []);

  const handler = () => {
    myRef.current++; // Good!
  };

  myRef.current++; // Bad!

  if (prop) {
    myRef.current++; // Bad!
  }

  return <button onClick={handler}>My button</button>;
}
```

# Summary

1. useRef() hook creates references.

2. Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current: you can use this property to read the reference value reference.current, or update reference.current = newValue.

3. Between the component re-renderings, the value of the reference is persisted.

4. Updating a reference, contrary to updating state, doesn't trigger component re-rendering.

5. References can also access DOM elements. Assign the reference to ref attribute of the element you'd like to access:

```html
<div ref="{reference}">Element</div>
```

and the element is available at **reference.current** after the component mounting.
