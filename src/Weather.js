import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import WeatherReport from "./WeatherReport";

import "./Weather.css";



export default function Weather (props){

   const [city, setCity]= useState(props.city)
const [loaded, setLoaded]=useState(false);
const [weatherReport, setweatherReport]=useState(null);




function retrieveData(response){
setweatherReport({
    city: response.data.name,
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


function search(){
const apiKey = "f15c99b37dfa1cbb83fb8a2b0c300b09";
const units = "metric";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(retrieveData);

}

function handleSubmit(event){
event.preventDefault();
search(city);
}

function handleCityChange(event){
setCity(event.target.value);
}


if (loaded) {
   
    return(
        <div className="Weather">
<header className = "heading">

            <form className="search-tool" onSubmit={handleSubmit}>
                <input type="search" placeholder="Type a city..." autofocus="yes" className="search" onChange={handleCityChange}/>
                <input type="submit" value="🔍" className="button"/>
            </form>
            <button className="button pin">📍</button>
              <p className="update-time">
        Last Updated: <FormattedDate date={weatherReport.date} />
    </p>

    </header>
          
<WeatherReport data={weatherReport}  className="weather-report" />

<h3 className="caption">
    Have a sun-derful day!
</h3>
 
           
            </div>
            


    )

} else {


search()

return(

<h1>    Loading... </h1>

)

}

}