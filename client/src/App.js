import React from "react";
import './App.css';
import {usePosition} from './Components/Location/UserLocation';
//import for nasa
//import for openweather
import Zomato from './Components/Zomato/Zomato'


function App() {
  const newLocation = usePosition();

  return (
    <div className="App">
   {
   // <Nasa newLocation={newLocation}/>
   // <OpenWeather/> 
  }
   <Zomato location ={newLocation} />
   
   
      latitude: {newLocation.latitude}
      <br/>
      longitude: {newLocation.longitude}
      <br/>
      error: {newLocation.error}
    </div>
  );
}

export default App;
