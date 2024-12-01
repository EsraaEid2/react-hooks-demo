import React, { useState } from 'react';
import useWeatherData from './useWeatherData';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [submittedCity, setSubmittedCity] = useState('');

  const handleSearch = () => {
    setSubmittedCity(city);
  };

  useWeatherData(submittedCity);

  return (
    <div className="weather-app container text-center">
      <h2>Weather App Demo</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <WeatherDisplay />
    </div>
  );
};

export default WeatherApp;
