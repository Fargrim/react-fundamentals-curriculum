import axios from 'axios';

const openWeatherKey = '2d4b3a400ebeddbcaca052859099c19d';
const currentWeather = (city) => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${openWeatherKey}`);
const fiveDay = (city) => axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${openWeatherKey}&cnt=5`);

const helpers = {
  getCurrentWeather: city => {
    return currentWeather(city).then(function(w) {
      return w.data.weather;
    });
  },
  getFiveDayForecast: city => {
    return fiveDay(city).then(function(w) {
      return w.data.list;
    });
  },
};

export default helpers;