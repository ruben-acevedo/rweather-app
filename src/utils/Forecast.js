const fetch = require("node-fetch");

const Forecast = async (latitude, longitude) => {
  const url = `https://api.darksky.net/forecast/8479bc15b3f20e3e03b19acc96462daf/${latitude}, ${longitude}?units=si`;

  const json = await fetch(url).then(res => res.json());

  const temperature = json.currently.temperature;
  const precipProbability = json.currently.precipProbability;
  const humidity = json.currently.humidity;
  const apparentTemperature = json.currently.apparentTemperature;
  const windSpeed = json.currently.windSpeed;

  return {
    temperature,
    precipProbability,
    apparentTemperature,
    humidity,
    windSpeed
  };
};

module.exports = Forecast;
