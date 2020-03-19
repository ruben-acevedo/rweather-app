const GetLocationInfo = require("./utils/GetLocationInfo");
const Forecast = require("./utils/Forecast");
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.get("/weather", (req, res) => {
  GetLocationInfo(req.query.location, data => {
    Forecast(data.latitude, data.longitude, forecastreturn => {
      res.send({
        temperature: forecastreturn.temperature,
        apparentTemperature: forecastreturn.apparentTemperature,
        precipProbability: forecastreturn.precipProbability,
        humidity: forecastreturn.humidity,
        windSpeed: forecastreturn.windSpeed,
        location: data.location
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
