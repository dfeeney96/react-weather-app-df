import "./Weather.css";

export default function Weather (){
    return(
        <div className="Weather">
        
            <form className="search-tool">
                <input type="search" placeholder="Type a city..." autofocus="yes" className="search"/>
                <input type="submit" value="🔍" className="button"/>
            </form>
            <button className="button pin">📍</button>
              <p className="update-time">
        Last Updated: Sunday 24 January 16:54
    </p>
       
            <div className="weather-report">      
          

<h1> London </h1>

<div className="row">
    <div className="col-4">
        <div className="row">
            <div className="col-6">
    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="sun" />
    </div> 
    <div className="col-6">
        <div className="row">
            <div className="col-1">
    <h2 className="temperature">
    6
    </h2>
    </div>
    
    <div className="col-1">
 <p>C|F</p>
 </div>
  
 </div>
 
    </div>
    </div>
    </div>
    <div className="col-6">
    <ul>
        <li>
            Sunny
        </li>
        <li>
            Wind Speed: 5mph
        </li>
        <li>
            Humidity: 68%
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

}