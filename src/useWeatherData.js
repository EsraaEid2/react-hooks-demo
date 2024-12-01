import { useEffect, useCallback } from 'react';
import { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const useWeatherData = (city) => {
  const { setWeatherData } = useContext(WeatherContext);

  const fetchWeather = useCallback(async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    const data = await response.json();
    setWeatherData(data);
  }, [city, setWeatherData]);

  useEffect(() => {
    if (city) fetchWeather();
  }, [city, fetchWeather]);
};

export default useWeatherData;
