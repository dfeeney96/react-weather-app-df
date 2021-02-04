  import React from "react";

  import Icon from "./Icon";

  import "./WeatherForecastDetail.css";

  export default function WeatherForecastDetail (props){

    let forecast = props.data;
    let hour = new Date(forecast.dt *1000).getHours();
    let hourformatting = null;

  if (hour<10){
  hourformatting =  `0${hour}:00`;
  }else{
      hourformatting = `${hour}:00`;
  }

      return(
          <div className="WeatherForecastDetail">
              
              
<p>
   {hourformatting}
    </p>

   
<Icon code={forecast.weather[0].icon} />

<p> 
    {Math.round(forecast.main.temp)}°C
</p>

    </div>
      )

      
      


  } 


  
  
  
  