
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [city,setCity]=useState("");
  const [name,setName]=useState("");
  const [temp,setTemp]=useState(0);
  const [weather,setWeather]=useState("");
  useEffect(()=>{
    const API_KEY="26359c30b200d473fc1d2d4f49229eb9";

   function fetchdetalils(){
      fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then((res)=>res.json()).then((data)=>{
        setName(data.name);
        setTemp(data.main.temp)
        setWeather(data.weather[0].description)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    fetchdetalils();

  },[city])
  return (
    <div>
       
        <input value={city} className="search" placeholder="Search" onChange={(e)=>{
          setCity(e.target.value);
        }}/>
        {name?<div className="weather">
          <h1>{name}</h1>
          <h1>{temp}</h1>
          <h2>{weather}</h2>
         
         </div>:""}

    </div>
  )
}

export default App
