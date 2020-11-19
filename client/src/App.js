import React from "react"
import './App.css';
import {usePosition} from './Components/Location/UserLocation';
//import for nasa
//import for openweather
//import for zomato


function App() {
  const newLocation = usePosition();

  return (
    <div className="App">
   {
   // <Nasa newLocation={newLocation}/>
   // <OpenWeather/>
   // <zomato/>
   
   /* <code>
      latitude: {newLocation.latitude}
      <br/>
      longitude: {newLocation.longitude}
      <br/>
      error: {newLocation.error}
    </code> */}
    </div>
  );
}

export default App;
