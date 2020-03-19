const fetch = require("node-fetch");

const GetLocationInfo = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoicnViZW5hY2V2ZWRvIiwiYSI6ImNrN3dudmI3MjAzdzEzbG50dTdhbTNndzYifQ.gRwqI-b06A_dXIB9FyEYdA`;

  fetch(url)
    .then(res => res.json())
    .then(json => {
      const longitude = json.features[0].center[0];
      const latitude = json.features[0].center[1];
      const location = json.features[0].place_name;

      callback({ location, latitude, longitude });
    })
    .catch(error => console.log("Location not found."));
};

module.exports = GetLocationInfo;
