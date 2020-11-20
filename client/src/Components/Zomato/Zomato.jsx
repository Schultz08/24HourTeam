import React, {useState} from "react"
import './Zomato.css';

function Zomato(props) {
  const request = async (latitude, longitude) => {
   
    let reqBody = {
        "latitude": latitude,
        "longitude": longitude
    }
    let response = await fetch ('http://localhost:4000/zomato', {method: 'POST', headers: { "Content-Type": "application/json", "user-key": "d8be902eb63eaf881c99e7b70eacd71e" }, body: JSON.stringify(reqBody)});
    let json = await response.json();
  
    return json;
  }

  
  const [restaurants, setRestaurants] = useState([]);

  let item; 
  request(props.location.latitude, props.location.longitude).then( (res) => {
     setRestaurants(res.nearby_restaurant.name)
  });
  console.log(restaurants)
  return(
        <div>
          <ul>
            <li>{restaurants}</li>
          </ul>
          {/* <h1>{item}</h1> */}
        </div>
  );
  }


export default Zomato;