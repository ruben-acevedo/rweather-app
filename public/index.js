const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const celsius = document.querySelector("#celsius");
const city = document.querySelector("#city");
const otherStats = document.querySelector("#otherStats");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  fetch(`http://localhost:3000/weather?location=!${search.value}`)
    .then(res => res.json())
    .then(json => {
      city.textContent = `Weather in ${json.location},`;
      celsius.textContent = `${json.temperature}°C`;
      otherStats.textContent = `Apparent Temperature: ${
        json.apparentTemperature
      }°C | Rain Probability: ${json.precipProbability *
        100}% | Humidity: ${json.humidity * 100}% | Wind Speed: ${
        json.windSpeed
      } km/h`;
    });
});
