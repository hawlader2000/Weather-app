import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles/Button.module.css";
const WeatherApp = () => {
  // const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const apiKey = "f64b2069f80741a0a7750643222212";

  const [users, setUsers] = useState({});
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const weatherdata = async (cityName) => {
    if (!cityName) return;
    try {
      const res = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json?key=" +
          apiKey +
          "&q=" +
          cityName +
          "&days=5&aqi=no&alerts=no"
      );
      //
      // "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=" +apiKey
      setUsers(res.data);
    } catch (error) {
      setError(error.messege);
    }
  };
  useEffect(() => {
    weatherdata(city);
  }, [city]);
  const handleChange = (e) => {
    console.log("value", e.target.value);
    setCity(e.target.value);
  };
  const handleSearch = () => {
    weatherdata(city);
  };
  console.log(users);
  return (
    <>
      <div className="container" id={styles.body}>
        <h1 className="text-center">Weather-App</h1>
        <form className="pt-5 ">
          <h4 className="text-center">Enter Your City</h4>
          <input
            type="text"
            className="form-control"
            id={styles.kuddus}
            onChange={handleChange}
            value={city}
          />
          <button
            className={styles.button}
            id={styles.buttonkagu}
            onClick={handleSearch}
            type="button"
          >
            Search
          </button>
        </form>
        {Object.keys(users).length > 0 && (
          <>
            <div className="card bg-primary" id={styles.card}>
              <p id={styles.cityText}>{users?.location?.name}</p>
              <p>{users?.location?.localtime}</p>
              <p>{users?.forecast?.forecastday[0].day?.avgtemp_c}</p>
            </div>
            <div className="card bg-primary" id={styles.card}>
              {users?.forecast?.forecastday[0].map((date) => {
                return <p>{users?.forecast?.forecastday[0].day}</p>;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default WeatherApp;
