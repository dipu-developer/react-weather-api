import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./Card";

function Weather() {
  const [search, setSearch] = useState("mumbai");
  const [cod, setCod] = useState(404);
  const [tempInfo, setTempInfo] = useState({});
  const [war, setWar] = React.useState("j");
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=01ce05b03b77ca5deb535e129c934ced`;
      const res = await fetch(url);
      const data = await res.json();
      const cod = data.cod;
      setCod(cod);
      ser(cod);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWether = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWether);
      
        
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  const ser = (cod) => {
    if (cod == 404) {
      setWar("war");
    }else{
      console.log("")
    }
  };

  return (
    <>
      <div className="search mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span
            className="input-group-text m"
            id="basic-addon2"
            onClick={getWeatherInfo}
          >
            Search
          </span>
        </div>
      </div>
      <div class={`${war}`}>
        <h2>Place not foud</h2>
        <span onClick={() => setWar("j")}>
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <Card tempInfo={tempInfo} cod={cod} />
    </>
  );
}

export default Weather;
