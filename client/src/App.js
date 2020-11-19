import React from "react"
import './App.css';
import {usePosition} from './Components/Location/UserLocation';


function App() {

  const newLocation = usePosition();
  return (
    <div className="App">
   {/* <code>
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
