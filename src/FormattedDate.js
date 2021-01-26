import React from "react";

export default function FormattedDate (props){
let daysName=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthsName=["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"]
let day= daysName[props.date.getDay()];
let date= props.date.getDate();
let months = monthsName[props.date.getMonth()];
let hours = props.date.getHours();
let minutes= props.date.getMinutes();
if(hours<10){
    hours=`0${hours}`;
}
if(minutes<10){
    minutes=`0${minutes}`;
}

    return(
     <span>  {day}, {date} {months}. {hours}:{minutes} </span>
    )
}