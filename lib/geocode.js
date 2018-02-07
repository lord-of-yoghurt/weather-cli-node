const request = require('request');

const GOOGLE_KEY = process.env.GOOGLE_KEY || ''; // get your own - it's free!
const GEO_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_KEY}`;

const geocodeAddress = (address) => {
  const options = {
    url: `${GEO_API_URL}&address=${encodeURIComponent(address)}`,
    json: true
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) reject('Argh server error :(');
      else if (body.status === 'ZERO_RESULTS') {
        reject('Sorry bud, couldn\'t find that one.');
      } else {
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

module.exports = {
  geocodeAddress
};
