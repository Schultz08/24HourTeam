let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');

const apiKey = "f609efa2c1b2a597d858821d82296b28";

const request = async (lat, long) => {
    let response = await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
    let json = await response.json();
    return json;
}

// Home page route.
router.post('/', function (req, res) {
  let {lat, long} = req.body;

  request(lat, long)
  .then(response => {
    res.send({"temp": response.main.temp, "name": response.name});
  });

})

module.exports = router;