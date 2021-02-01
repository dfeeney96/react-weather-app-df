import React, {useState} from "react";

export default function Toggle (props){
const [unit, setUnit]= useState("celsius");

function convertToCelsius (event){
event.preventDefault()
setUnit("celsius");

}

function convertToFahrenheit (event){
event.preventDefault()
setUnit("fahrenheit");

}

if (unit === "celsius") {
    let celsius = props.celsius;
    return(
<div className="Toggle">
        <span className="temperature">
 {celsius}
    </span>
    <span className="unit">°C | <a href="/" onClick={convertToFahrenheit}>F</a> </span>
  
    </div> 
    )
    } else {
        let fahrenheit = Math.round((props.celsius* 9/5) + 32);
        return(
<div className="Toggle">
        <span className="temperature">
{fahrenheit}
    </span>
    <span className="unit">°F | <a href="/" onClick={convertToCelsius}>C</a> </span>
  
    </div> 
    )
    }
}