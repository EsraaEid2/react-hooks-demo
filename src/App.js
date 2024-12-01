import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Counter from './Counter';
import Timer from './Timer';
import WeatherProvider from './WeatherContext';
import WeatherApp from './WeatherApp';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            React Hooks Demo
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/counter">
                  Counter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/timer">
                  Timer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/weather">
                  Weather
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h1 className="text-center mt-5">Welcome to React Hooks Demo</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route
            path="/weather"
            element={
              <WeatherProvider>
                <WeatherApp />
              </WeatherProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
