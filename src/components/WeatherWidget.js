import { useState, useEffect } from 'react';
import './WeatherWidget.css'

const WeatherWidget = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetching current location using Geolocation API
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Fetching weather data from OpenWeatherMap API
          const apiKey = '292f84b8ed6273a989b79529f0ce4bb1'; // Replace with your OpenWeatherMap API key
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
          const response = await fetch(url);
          const data = await response.json();

          // Setting location and weather state
          setLocation(`${data.name}, ${data.sys.country}`);
          setWeather({
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon
          });
        });
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchWeather();
  }, []);


  let weatherIcon = null;
  let weatherIconUrl = null;
  if (weather)
  {    
    // Determine the weather icon based on the weather condition
    weatherIcon = weather.icon;
    weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
  }

  return (
    <div id="weather-app">
      {error && <div>{error}</div>}      
      {weather && location && (
        <div id="weather-app-div">
            <p id="location">{location}</p>
            <img id="weather-icon" src={weatherIconUrl} alt="Weather Icon" />
            <p id="temp">{weather.temperature}°C</p>
            <p id="description">{weather.description}</p>
            
        </div>
        
      )}
    </div>
  );
};

export default WeatherWidget;