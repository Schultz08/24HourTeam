import React, {useState} from "react"
import './Weather.css';

function OpenWeather(props) {

  const request = async (lat, long) => {

    let reqBody = {
        "lat": lat,
        "long": long
    }

    let response = await fetch (`http://localhost:4000/openweather`, {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(reqBody)});
    let json = await response.json();
    return json;
  }

  const [weather, setWeather] = useState(0);
  const [celcius, setCelcius] = useState(false);
  const [locationName, setLocationName] = useState();

  let weatherK = 0;

  request(props.location.latitude, props.location.longitude).then( (res) => {
      setLocationName(res.name)
    weatherK = res.temp;

    let tempC = parseInt(weatherK) - 273.15; 
    let tempF = tempC * (9/5) + 32;

    setWeather(celcius ? (Math.round(tempC * 10) / 10).toFixed(1) + "C" : (Math.round(tempF * 10) / 10).toFixed(1) + "F");
  });

  let toggleWeather = () => {
    setCelcius(!celcius);

    let tempC = parseInt(weatherK) - 273.15; 
    let tempF = tempC * (9/5) + 32;

    setWeather(celcius ? (Math.round(tempC * 10) / 10).toFixed(1) + "C" : (Math.round(tempF * 10) / 10).toFixed(1) + "F");
  }

  return (
    <div className="Weather" class="weather">
        It is {weather} in {locationName}
        <button onClick={toggleWeather}>Toggle Weather</button>
    </div>
  );
}

export default OpenWeather;
