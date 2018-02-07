const yargs = require('yargs');
const dotenv = require('dotenv').config();

const geocode = require('./lib/geocode');
const weather = require('./lib/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to get weather data for',
      string: true // always parse it as a string
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a)
  .then(({ address, lat, lng }) => {
    console.log(`Showing weather for ${address}:`);
    return weather.getWeather({ lat, lng })
  })
  .then((weatherData) => {
    console.log(weatherData.summary);
    console.log(`Temperature: ${weatherData.temp}ºC`);
    console.log(`Feels like: ${weatherData.apTemp}ºC`);
    console.log(`Humidity: ${Math.round(weatherData.apTemp)}%`);
  })
  .catch((e) => {
    console.log(e);
  });
