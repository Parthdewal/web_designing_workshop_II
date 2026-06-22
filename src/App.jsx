import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Counter Application</h2>
        <h1 className="counter">{count}</h1>

        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;