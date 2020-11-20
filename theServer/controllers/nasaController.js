
const { response } = require('express');
let express = require('express');
let router = express.Router();
let fetch = require('node-fetch');





router.get('/', function (req, res) {
    // let { lat, long } = req.body;
    
    // let coords = geo.getCurrentPosition()
    
    // const geo = navigator.geolocation;
    // if (!geo) {
        //   setError('Geolocation is not supported');
        //   return;
        // }
        
        
        const request = async () => {
            let response = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=SJ4oEOqDjg3cbKMl7QhN3AWDNFOA0aF9Kb9Nh126`);
            // let json = await response.json();
            return response;
        }

        request().then(res.send({response}))

    // console.log(coords)
    // request(lat, long)
    //     .then(response => {
    //         res.send(response.json());
    //     }).catch(err => res.status(500).json(err));

})

module.exports = router;

//======================================================================================================================================================================================

// const express = require("express");
// const router = express.Router();
// const fetch = require("node-fetch")

// // key ?api_key=lgsUjZaOxV6jkXPJCVb76f0HmrhX63Vh8qVAjjOF
//  const key = "api_key=SJ4oEOqDjg3cbKMl7QhN3AWDNFOA0aF9Kb9Nh126";
//  const baseUrl = "https://api.nasa.gov/planetary/earth/imagery?"

// //url https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&api_key=DEMO_Key
// //    https://api.nasa.gov/planetary/earth/imagery?lon=-85.983232&lat=39.8196736&api_key=lgsUjZaOxV6jkXPJCVb76f0HmrhX63Vh8qVAjjOF

// // router.post("/", (req, res) =>{

//     let {lat, long} = req.body;

//     //let url =  `${baseUrl}lon=${long}&lat=${lat}&date=2014-02-01&${key}`
//     let url = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=SJ4oEOqDjg3cbKMl7QhN3AWDNFOA0aF9Kb9Nh126"

//     const request = async () =>{

//         try{
//             let response =
//             await fetch(url);
//             let json = await response.json()

//             console.log(json)
//             return json;
//         }
//         catch(error){
//             res.status(500).json({error})
//         }

//     }

//     let data = request()

//     console.log(data)
//     console.log(1)

//     if(data){
//         res.status(200).json({item:data})
//     }


    // fetch(url,)
    // .then(data => res.status(200).json({thing:data}))
    // .catch((err) => res.json(err))



    // fetch("https://api.nasa.gov/planetary/apod?api_key=lgsUjZaOxV6jkXPJCVb76f0HmrhX63Vh8qVAjjOF")
    // .then(response => response.json())
    // .then(data => { console.log(data)})
// })

// module.exports = router;


// // const request = async (lat, long) => {
// //     let response = await fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
// //     let json = await response.json();
// //     return json;
// // }

// // // Home page route.
// // router.post('/', function (req, res) {
// //   let {lat, long} = req.body;

// //   request(lat, long)
// //   .then(response => {
// //     res.send({"temp": response.main.temp, "name": response.name});
// //   });

// // })

//  module.exports = router