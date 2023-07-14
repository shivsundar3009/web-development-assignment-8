import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className='app'>

      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      </div>
    </div>
  );
}

export default App;