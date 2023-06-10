# UseMemo

1. **useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result, and the depedencies array:**

```js
const memoizedResult = useMemo(compute, dependencies);
```

- During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.

- If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute, but returns the memoized value.

- But if the dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.

  _That's the essence of useMemo() hook._

```js
const memoizedResult = useMemo(() => {
  return expensiveFunction(propA, propB);
}, [propA, propB]);
//If your computation callback uses props or state values, then be sure to indicate these values as dependencies:
```

<hr>

**While useMemo() can improve the performance of the component, you have to make sure to profile the component with and without the hook. Only after that make the conclusion whether memoization worth it.When memoization is used inappropriately, it could harm the performance**

<hr>

# Example

```js
import { useState, useMemo } from 'react';

export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // useMemo(() => factorialOf(number), [number]) returns the memoized factorial calculation. and doesn't recalculate the factorial unless the dependency array changes
  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
```

# Summary

useMemo(() => computation(a, b), [a, b]) is the hook that lets you memoize expensive computations. Given the same [a, b] dependencies, once memoized, the hook is going to return the memoized value without invoking computation(a, b).
