const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_KEY}&query=${longitude},${latitude}`;

  request(
    url,
    { json: true },
    (error, response, { error: locationError, current }) => {
      if (error) {
        callback("Unable to connect to weather service");
      } else if (locationError) {
        callback("Unable to find location");
      } else {
        const { humidity, weather_descriptions, temperature, feelslike } =
          current;
        callback(
          undefined,
          `${weather_descriptions[0]}. It is currently ${temperature} degrees and it feels like ${feelslike} degrees. The humidity is ${humidity}%.`
        );
      }
    }
  );
};

module.exports = forecast;
