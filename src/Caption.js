import React from "react";

export default function Caption (props){

    const codemapping={
         "01d": "Have a sun-derful day!",
        "01n": "Have a de-night-ful evening!",
        "02d": "Hope you're on cloud 9!",
        "02n":"Hope you're on cloud 9!",
        "03d": "Hope you're on cloud 9!",
        "03n": "Hope you're on cloud 9!",
        "04d":"Hope you're on cloud 9!",
        "04n":"Hope you're on cloud 9!",
        "09d":"Have a splashing time!",
        "09n": "Have a splashing time!",
        "10d": "Have a splashing time!",
        "10n": "Have a splashing time!",
        "11d":"Have a splashing time!",
        "11n": "Have a splashing time!",
        "13d": "Have an ice day!",
        "13n":"Have an ice day!",
        "50d": "How mist-erious!",
        "50n": "How mist-erious!"

    };

    return(
    <h3 className= "caption">{codemapping[props.code]}</h3>
    )
}