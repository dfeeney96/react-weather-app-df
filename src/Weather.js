import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";

import "./Weather.css";


export default function Weather (props){

   
const [loaded, setLoaded]=useState(false);
const [weatherReport, setweatherReport]=useState(null);




function handleSubmit(response){
setweatherReport({
    date: new Date(response.data.dt*1000),
     description: response.data.weather[0].description,
     humidity: response.data.main.humidity,
    temperature: Math.round(response.data.main.temp),
    tempFeels: Math.round(response.data.main.feels_like),
    windSpeed: Math.round(response.data.wind.speed)
})

    console.log(response);
     setLoaded(true);
}    


if (loaded) {
   
    return(
        <div className="Weather">
        
            <form className="search-tool">
                <input type="search" placeholder="Type a city..." autofocus="yes" className="search"/>
                <input type="submit" value="🔍" className="button"/>
            </form>
            <button className="button pin">📍</button>
              <p className="update-time">
        Last Updated: <FormattedDate date={weatherReport.date} />
    </p>
       
            <div className="weather-report">      

<span className="city"> {props.city} </span> 

  <span className="toggle"> C|F </span>
 


<div className="row ">
    <div className="col-6 ">
        <div className="row ">
            <div className="col-6 ">
    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="sun" />
    </div> 
    <div className="col-6">    
    <span className="temperature">
 {weatherReport.temperature}  
    </span>
    <span className="unit">°C </span>
 </div>
  
 
    </div>
    </div>
    <div className="col-6">
    <ul>
        <li className = "weather-description text-capitalize">
            <strong>{weatherReport.description}</strong>
           
        </li>
  
        <li>
            Wind Speed: 
            {weatherReport.windSpeed}mph
        </li>
        <li>
            Humidity: {weatherReport.humidity}%
        </li>
        <li>
            Feels Like: {weatherReport.tempFeels}°C
        </li>
    </ul>
 </div>
 </div>
  </div>

<h3 className="caption">
    Have a sun-derful day!
</h3>
           
            </div>
            


    )

} else {


const apiKey = "f15c99b37dfa1cbb83fb8a2b0c300b09";
const city = props.city;
const units = "metric";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(handleSubmit);

return(

<h1>    Loading... </h1>

)

}

}