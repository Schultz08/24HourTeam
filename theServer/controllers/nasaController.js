const express = require("express");
const router = express.Router();

// key ?api_key=lgsUjZaOxV6jkXPJCVb76f0HmrhX63Vh8qVAjjOF
 const key = "api_key=lgsUjZaOxV6jkXPJCVb76f0HmrhX63Vh8qVAjjOF";
 const url = "https://api.nasa.gov/planetary/earth/imagery?"

//url https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&api_key=DEMO_Key

router.get("/", (req, res) =>{
    console.log(req)

    // fetch("https://api.nasa.gov/planetary/apod?api_key=lgsUjZaOxV6jkXPJCVb76f0HmrhX63Vh8qVAjjOF")
    // .then(response => response.json())
    // .then(data => { console.log(data)})
})

module.exports = router;