import React from "react"
import './App.css';
import {usePosition} from './Components/Location/UserLocation';
//import for nasa
import OpenWeather from './Components/OpenWeather/Weather';
//import for zomato


function App() {
  const newLocation = usePosition();

  return (
    <div className="App">
   {
   // <Nasa newLocation={newLocation}/>
   <OpenWeather location={newLocation}/>
   // <zomato/>
   }
    </div>
  );
}

export default App;
