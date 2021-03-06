 import React from "react";
 import Caption from "./Caption";
 import Icon from "./Icon.js";
 import Temperature from "./Temperature.js";

 export default function WeatherReport(props){
     return(
 
 <div className="weather-report">      

<div>
    <span className="city">  {props.data.city}</span> 
     </div> 

  < br />
<div className="row ">
    <div className="col-6 ">
        <div className="row ">
            <div className="col-3 ">
    <Icon code={props.data.icon} />
    </div> 
    <div className="col-9">    
    <Temperature celsius={props.data.temperature} />
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
<Caption code={props.data.icon}  />   
</div>


 )
}