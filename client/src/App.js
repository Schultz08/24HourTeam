import React from "react"
import './App.css';
import {usePosition} from './Components/Location/UserLocation';


function App() {
  const {latitude, longitude, error} = usePosition();

  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  return (
    <div className="App">
   <code>
      latitude: {latitude}
      <br/>
      longitude: {longitude}
      <br/>
      error: {error}
    </code>
    </div>
  );
}

export default App;
