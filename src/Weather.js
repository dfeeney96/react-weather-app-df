import "./Weather.css";

export default function Weather (){
    return(
        <div className="Weather">
        
            <form className="search-tool">
                <input type="search" placeholder="Type a city..." />
                <input type="submit" value="🔍" />
            </form>
            <button className="current-location">📍</button>
            <br/>
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
            <div className="col-6">
    <h2>
    6C
    </h2>
    </div>
    <div className="col-6">
 <a href="/">C</a> | <a href="/">F</a>
 </div>
 </div>
    </div>
    </div>
    </div>
    <div className="col-4">
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
<h3>
    Have a sun-derful day!
</h3>
            </div>
            </div>
            


    )

}