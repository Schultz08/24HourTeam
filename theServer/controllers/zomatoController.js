const { response } = require('express');
let express = require('express');
let router = express.Router();
let fetch = require("node-fetch")
const userKey = "d8be902eb63eaf881c99e7b70eacd71e";

const request = async (latitude, longitude) => {

    let response = await fetch (`https://developers.zomato.com/api/v2.1/geocode?=${latitude}&lon=${longitude}&user-key`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "user-key": userKey
        },
    })
    let json = await response.json()
    return json;
}

router.post('/', function (req, res) {
  let {latitude, longitude} = req.body;

  request(latitude, longitude)
  .then(response => {
    res.send({"nearby_restaurant": response});
  });

})


module.exports = router;





// const restaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//       const userKey = 'd8be902eb63eaf881c99e7b70eacd71e';
//       console.log(latitude, longitude);
//       const getRestaurant = () => {
//           fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
//               method: 'GET',
//               headers: {
//                   'user-key': userKey,
//                   'Content-Type': "application/json"
//               }
//           })
//           .then(res => res.json())
//           .then(data => setRestaurants(data.nearby_restaurants))
//       }
//       console.log(restaurants);
// }

//     module.exports = router;




// const request = () => {
//   const [restaurants, setRestaurants] = useState([]);
//       const userKey = 'd8be902eb63eaf881c99e7b70eacd71e';
//       console.log(latitude, longitude);
//       const getRestaurant = () => {
//           fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
//               method: 'GET',
//               headers: {
//                   'user-key': userKey,
//                   'Content-Type': "application/json"
//               }
//           })
//           let {latitude, longitude} = req.body
//           request(latitude, longitude)
//           .then(res => res.json())
//           .then(data => setRestaurants(data.nearby_restaurants))
//       }
//       console.log(restaurants)
// }

//     module.exports = router;




// import React, {useState, useEffect} from 'react';
// import ZomatoResults from './ZomatoResults';
// const baseUrl = 'https://developers.zomato.com/api/v2.1/search'