import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="timer-container text-center">
      <h2>Timer Demo</h2>
      <h3>{seconds} seconds</h3>
      <button
        className={`btn btn-${running ? 'danger' : 'success'} m-2`}
        onClick={() => setRunning(!running)}
      >
        {running ? 'Stop' : 'Start'}
      </button>
      <button className="btn btn-secondary m-2" onClick={() => setSeconds(0)}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
