import {useState, useEffect} from "react";


const Nasa = (props) => {

    useEffect(()=>{
        fetch("http://localhost:4000/nasa/", {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "location": props.location
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return
}

export default Nasa;