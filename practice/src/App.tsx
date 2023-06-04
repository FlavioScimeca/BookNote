import { useEffect, useRef, useState } from 'react';

function Greet({ name }: { name: string }) {
  const message = `Hello, ${name}!`; // Calculates output

  // Bad!
  document.title = `Greetings to ${name}`; // Side-effect!

  return <div>{message}</div>;
}

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

      <Greet name="Chicco" />
    </div>
  );
}

export default App;
