import React from "react";
import './App.css';
import {usePosition} from './Components/Location/UserLocation';
//import for nasa
import Zomato from './Components/Zomato/Zomato'
import OpenWeather from './Components/OpenWeather/Weather';


function App() {
  const newLocation = usePosition();

  return (
    <div className="App">
   {
   <Nasa/>
  }
   <Zomato location ={newLocation} />
   
   
      latitude: {newLocation.latitude}
      <br/>
      longitude: {newLocation.longitude}
      <br/>
      error: {newLocation.error}
   <OpenWeather location={newLocation}/>
   // <zomato/>
   }
    </div>
  );
}

export default App;
