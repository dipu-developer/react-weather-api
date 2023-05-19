import React, { useEffect } from "react";

const Card = ({ tempInfo ,cod}) => {
  const[weatheState, setWeather] = React.useState("");

  
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Cloud":
          setWeather("fa-cloud");
          break;
        case "Haze":
          setWeather("fa-smog");
          break;
        case "Mist":
          setWeather("fa-sun");
          break;
        case "Haze":
          setWeather("fa-sun");
          break;
        case "Clear":
          setWeather("fa-sun");
          break;

        default:
          setWeather("fa-cloud");
          break;
      }
    }
  }, [weathermood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    
      <div className="weather">
        <div className="row">
          <div className="col cen">
            <i className={`fa-solid ${weatheState}`}></i>
            
          </div>
          <div className="row m-0">
            <div className="col-md-8 blk">
              <div className="row">
                <div className="col-6 deg ">
                  <span className="text-white">{temp} &#176;</span>
                </div>
                <div className="col-6 details">
                  <div className="row">
                    <span className="text-white">{weathermood}</span>
                  </div>
                  <div className="row ">
                    <span className="text-white">
                      {name},{country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rck">
              <div className="row">
                <span className="text-white">
                  {new Date().toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row set m-0 ">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-2 mt-3">
                <i className="fa-solid fa-sun"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>{timeStr}</span>
                  <span>Sunset</span>
                </div>
              </div>
              <div className="col-2 mt-3">
                <i className="fa-solid fa-wind"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>{speed}</span>
                  <span>Speed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row m-0 set">
              <div className="col-2 mt-3">
                <i className="fas fa-tint"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>{humidity}</span>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col-2 mt-3">
                <i className="fas fa-cloud-showers-heavy"></i>
              </div>
              <div className="col-4">
                <div className="info mt-2">
                  <span>{pressure}</span>
                  <span>Pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
