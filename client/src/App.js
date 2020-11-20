import React from "react";
import './App.css';
import {usePosition} from './Components/Location/UserLocation';
import Nasa from "./Components/Nasa/Nasa"
import Zomato from './Components/Zomato/Zomato'
import OpenWeather from './Components/OpenWeather/Weather';


function App() {
  const newLocation = usePosition();

  return (
    <div className="App">
    <OpenWeather location={newLocation}/>
   <Nasa/>
   <Zomato location ={newLocation} />
      latitude: {newLocation.latitude}
      <br/>
      longitude: {newLocation.longitude}
      <br/>
      error: {newLocation.error}
   }
    </div>
  );
}

export default App;
