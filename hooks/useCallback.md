# useCallback

The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.
This can improve performance.

# Syntax

```js
import React, { useCallback } from 'react';

function MyComponent() {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []); //  Dependency Array

  return <MyChild onClick={handleClick} />;
}
```

# Example

```ts
import { useCallback, useState } from 'react';
import Todos from './components/Todos';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // Use the useCallback Hook to prevent the Todos component from re-rendering needlessly, unless the dependency Array is updated
  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, 'New Todo']);

    // Dependency Array, every time is update the function is recalculated
  }, [todos]);

  return (
    // Now the Todos component will only re-render when the todos prop changes
    <>
      changes.
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
```

## _**Todos.tsx**_

```ts
import { memo } from 'react';

interface TodoProps {
  todos: string[];
  addTodo: () => void;
}

const Todos = ({ todos, addTodo }: TodoProps) => {
  console.log('child render');
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
```

> You will notice that the Todos component re-renders even when the todos do not change.

> Why does this not work? We are using **memo**, so the **Todos** component should not re-render since neither the **todos** state nor the **addTodo function** are changing when the count is incremented.

> This is because of something called **_"referential equality"_**.

> Every time a component re-renders, **its functions get recreated**. Because of this, **the addTodo function has actually changed**.

<br>
<br>

# NB

- Quantify the increased performance (e.g. 150ms vs 50ms render speed increase)
- Ask yourself: does the increased performance, compared to increased complexity, worth using useCallback()?
