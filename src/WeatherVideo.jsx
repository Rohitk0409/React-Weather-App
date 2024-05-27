function WeatherVideo({ weatherInfo }) {

  return (
    <>
      {weatherInfo.humidity>75 && <video autoPlay loop muted playsInline className='video'>
          <source src="summer2.mp4" type="video/mp4" />
      </video>}
      
      {weatherInfo.temp<=25 && <video autoPlay loop muted playsInline className='video'><source src="winter.mp4" type="video/mp4" />
          </video>
      }   
      {
        weatherInfo.temp>25 && <video autoPlay loop muted playsInline className='video'>
          <source src="summer3.mp4" type="video/mp4" />
      </video>
      }
      
     
      
    </>
  );
}
export default WeatherVideo;