const fetch = require("node-fetch");

const Forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/8479bc15b3f20e3e03b19acc96462daf/${latitude}, ${longitude}?units=si`;

  fetch(url)
    .then(res => res.json())
    .then(json => {
      const temperature = json.currently.temperature;
      const precipProbability = json.currently.precipProbability;
      const humidity = json.currently.humidity;
      const apparentTemperature = json.currently.apparentTemperature;
      const windSpeed = json.currently.windSpeed;
      callback({
        temperature,
        precipProbability,
        apparentTemperature,
        humidity,
        windSpeed
      });
    })
    .catch(error => console.log(error));
};

module.exports = Forecast;
