import React, { useState } from 'react';
import './Counter.css'; // for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container text-center">
      <h2>Counter Demo</h2>
      <h3>{count}</h3>
      <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn btn-danger m-2" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="btn btn-secondary m-2" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
