import "./WeatherBox.css";
function WeatherBox({ info }) {
 
  return ( 
    <>
      <div className='card-container'>
        < div className='card'>
          <p className='location'><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;<b>{info.city.toUpperCase()}</b></p>
           <div className='maxandmin'>
            <h1 className='temp'>{info.temp}&deg;C</h1>
              <p><b>Max : </b>{info.temp_max}&deg;C</p>
              <p><b>Min : </b>{info.temp_min }&deg;C</p>
          </div>
        </div> 

        <div className="card">
          <h2> {info.weather.toUpperCase()} <i className="fa-solid fa-cloud"></i></h2>
          <div>
             <p><b>Pressure : </b>{info.pressure}&deg;C</p>
             <p><b>Weather feel like :</b>{info.feels_like}&deg;C</p>
          </div>
          <div className='presure'>
            <i className="fa-solid fa-bars-staggered"></i><i className="fa-solid fa-bars-staggered"></i><i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
{/* let date = new Date(jsonResponse.sys.sunrise*1000);
      console.log(date);   */}
        <div className="card sun">
          <h1> Sun <i className="fa-solid fa-mountain-sun"></i></h1>
          <div className="sunset">
            <p><b>Sunrise : </b>{info.sunrise}<i className="fa-solid fa-sun"></i></p>
          <p><b>Sunset : </b>{info.sunset}<i className="fa-solid fa-cloud-sun"></i></p>
          </div>
          </div>
     </div>
      </>
  
  );
}
export default WeatherBox;