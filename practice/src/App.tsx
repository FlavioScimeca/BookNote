import { useCallback, useState } from 'react';
import Todos from './components/Todos';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, 'New Todo']);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((todos) => [...todos, 'New Todo']);
  // };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
