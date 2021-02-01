 import React from "react";
 import Icon from "./Icon.js";

 export default function WeatherReport(props){
     return(
 
 <div className="weather-report">      

<div>
    <span className="city">  {props.data.city}</span> <span className="toggle"> C|F </span>
     </div> 

  
 

<div className="row ">
    <div className="col-6 ">
        <div className="row ">
            <div className="col-6 ">
    <Icon code={props.data.icon} />
    </div> 
    <div className="col-6">    
    <span className="temperature">
 {props.data.temperature}
    </span>
    <span className="unit">°C </span>
 </div>
  
 
    </div>
    </div>
    <div className="col-6">
    <ul>
        <li className = "weather-description text-capitalize">
            <strong> {props.data.description}</strong>
           
        </li>
  
        <li>
            Wind Speed:  {} {props.data.windSpeed}mph
        </li>
        <li>
            Humidity: {}  {props.data.humidity}%
        </li>
        <li>
            Feels Like: {}  {props.data.tempFeels}°C
        </li>
    </ul>
 </div>
</div>
</div>


 )
}