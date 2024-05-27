import { useRef, useState } from "react";
import AppName from "./AppName.jsx";
import DateBox from "./DateBox.jsx";
import SearchBox from "./SearchBox.jsx";
import './WeatherApp.css';
import WeatherBox from "./WeatherBox.jsx";
import WeatherVideo from "./WeatherVideo.jsx";

function WeatherApp() {
  let weatherInformation = {
    city:"Varanasi",
    temp:39.05,
    temp_max:39.05,
    temp_min:39.05,
    feels_like:43.45,
    humidity: 35,
    pressure: 998,
    weather: "Haze",
    sunrise:"5:26 AM",
    sunset:"6:00 PM",
  }
  let cityRef = useRef('varanasi');
  let [weatherInfo, setWeatherInfo] = useState(weatherInformation);
 
  const API_url = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "b36a78dc4984b02eaf2e6ea073b6aa7b";
  
  let weatherInfor = async () => {
    try {
      let response = await fetch(`${API_url}?q=${cityRef.current.value}&appid=${API_key}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse)
      
      let date1 = new Date(jsonResponse.sys.sunrise * 1000);
      let riseTime = "";
      let risehour = date1.getHours();
      if (risehour < 10) {
        risehour = "0" + risehour;
      }
      let risemin = date1.getMinutes();
      if (risemin < 10) {
        risemin = "0" + risemin;
      }
      riseTime = risehour + ":" + risemin + " AM";

      let date2 = new Date(jsonResponse.sys.sunset * 1000);
      let setTime = "";
      let sethour = date2.getHours();
      if (sethour > 12) {
        sethour = sethour - 12;
      }
      if (sethour < 10) {
        sethour = "0" + sethour;
      }
      let setmin = date2.getMinutes();
    if (setmin < 10) {
        setmin = "0" + setmin;
      }
     setTime = sethour + ":" + setmin + " PM"
     let newCity = cityRef.current.value;
    let info = {
      city:newCity,
      temp:jsonResponse.main.temp,
      temp_max:jsonResponse.main.temp_max,
      temp_min:jsonResponse.main.temp_min,
      feels_like:jsonResponse.main.feels_like,
      humidity:jsonResponse.main.humidity,
      pressure:jsonResponse.main.pressure,
      weather:jsonResponse.weather[0].description,
      sunrise:riseTime,
      sunset:setTime,
    };
    setWeatherInfo(info);
    cityRef.current.value = "";
    }
    catch (err) {
      
     
    }
  }
  // useEffect(weatherInfor(), []);

   async function  onClick(event) {
    try {
      event.preventDefault();
    await weatherInfor();
    }
    catch (err) {
     
    }
  }
 
  return (
    <center className='weatherapp'>
      <WeatherVideo weatherInfo={weatherInfo}></WeatherVideo>
      <div>
       <AppName></AppName>
        <SearchBox onClick={onClick} refer={cityRef}></SearchBox>
        <br /><br />
        <DateBox></DateBox>
       <WeatherBox info={weatherInfo}></WeatherBox>
    </div>
    </center>
  );
}
export default WeatherApp;