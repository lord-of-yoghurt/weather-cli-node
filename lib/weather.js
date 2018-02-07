const request = require('request');

const WEATHER_KEY = process.env.WEATHER_KEY || ''; // get your own - it's free!
const WEATHER_URL = 'https://api.forecast.io/forecast';

const getWeather = ({ lat, lng }) => {
  const options = {
    url: `${WEATHER_URL}/${WEATHER_KEY}/${lat},${lng}?units=si`,
    json: true
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve({
          summary: body.currently.summary,
          temp: body.currently.temperature,
          apTemp: body.currently.apparentTemperature,
          humidity: body.currently.humidity,
        });
      } else {
        reject('Sorry pumpkin, no weather for ya');
      }
    });
  });
};

module.exports = {
  getWeather
};
