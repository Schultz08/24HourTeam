import { useState, useEffect } from "react";
import React from "react";


function Nasa() {

    //
    //

    const [image, setImage] = useState({})

    // const request = async (lat, long) => {
    //     try{

    //         let reqBody = {
    //             "lat": lat,
    //             "long": long
    //         }
            
    //         let response =
    //         await fetch('http://localhost:4000/nasa/', {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(reqBody)
    //         });
            
    //          let json = await response.json();
    //         return json
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    //     let res = request(props.location.latitude, props.location.longitude)

    //      console.log(res)

    // .then((res) =>{ res.json()
    //     // setImage(res)
    // }).then(data => console.log(data))
    useEffect(()=>{
        fetch("http://localhost:4000/nasa/", {
            method: "get",
            headers:{"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(thing => setImage(thing))
    }, [])

    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )


}

export default Nasa;