import React, {useState} from "react";
import axios from "axios";

import WeatherForecastDetail from"./WeatherForecastDetail";



export default function WeatherForecast (props){

    
    const [loaded, setLoaded] =useState(false);
    const [forecast, setForecast]=useState(null);

function handleForecastResponse (response){
    setForecast(response.data);
    setLoaded(true);
    
}






if (loaded && props.city === forecast.city.name){
 
    return(

        <div className="WeatherForecastDetail">

  <div className="row WeatherForecastReport">
           
            <div className="col-3">
      <WeatherForecastDetail  data={forecast.list[0]} />
      </div>
      <div className="col-3">
            <WeatherForecastDetail  data={forecast.list[1]} />
            </div>
            <div className="col-3">
                  <WeatherForecastDetail  data={forecast.list[3]} />
                  </div>
                    <div className="col-3">
                        <WeatherForecastDetail  data={forecast.list[4]} />
                        </div>
                        </div>
                   
                        </div>
    )
   
} else{
const apiKey = "f15c99b37dfa1cbb83fb8a2b0c300b09";
   const apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleForecastResponse);
return( 

     null
    )


}


    
}