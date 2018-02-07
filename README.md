## Weather CLI App

Just a simple console app that uses two different APIs (Google Geocode API and Forecast.io)
to fetch coordinates for a location entered by the user, and the current weather for that location.

### Usage

Clone the repo, then install the dependencies:

`npm install`

Assuming you have API keys for the Google API and Forecast.io (both are free), either paste them
to geocode.js and weather.js, respectively, or create a `.env` file and include them like so:

```
GOOGLE_KEY=<your-key>
WEATHER_KEY=<your-key>
```

Run the app:

`node app.js -a '<address-here>'`

The address is a required console argument, and it can be a location, a zip code, or a specific
address.

### Sample output

```
$ node app.js -a 'key west fl'
Showing weather for Key West, FL 33040, USA:
Clear
Temperature: 26.22ºC
Feels like: 27.82ºC
Humidity: 28%
```

Note: to switch to Fahrenheit, remove `?units=si` from the link in lib/weather.js, line 8.

Have fun, I guess?.. :-P
