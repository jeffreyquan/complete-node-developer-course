const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`;

  request(url, { json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services");
    } else if (body.features.length === 0) {
      callback("Unable to find location. Please try another search term.");
    } else {
      const { center, place_name } = body.features[0];
      callback(undefined, {
        latitude: center[1],
        longtitude: center[0],
        location: place_name,
      });
    }
  });
};

module.exports = geocode;
