import React, { useContext, useMemo } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherDisplay = () => {
  const { weatherData } = useContext(WeatherContext);

  const displayWeather = useMemo(() => {
    if (!weatherData) return 'No Data';
    return `${weatherData.location.name}: ${weatherData.current.temp_c}°C`;
  }, [weatherData]);

  return (
    <div className="weather-display">
      <h3>{displayWeather}</h3>
    </div>
  );
};

export default WeatherDisplay;
