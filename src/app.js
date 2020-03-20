const GetLocationInfo = require("./utils/GetLocationInfo");
const Forecast = require("./utils/Forecast");
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.get("/weather", async (req, res) => {
  try {
    const { latitude, longitude } = await GetLocationInfo(req.query.location);
    const forecast = await Forecast(latitude, longitude);
    res.send(forecast);
  } catch (e) {
    res.status(500).send({ error: e });
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
