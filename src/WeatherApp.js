import styles from "./styles/Button.module.css";
// import WeatherDesign from "./WeatherDesign";
// import { Link } from "react-router-dom";
import Details from "./Details";
import Hourinfo from "./Hourinfo";
import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const apiKey = "f64b2069f80741a0a7750643222212";
  const [users, setUsers] = useState("");
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
      setUsers(res.data);
    } catch (error) {
      setError(error.messege);
    }
  };
  useEffect(() => {
    weatherdata(city);
  }, [city]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(users);
  return (
    <>
      <div className="container" id={styles.body}>
        <h1 className="text-center">Weather-App</h1>
        <div className="pt-5">
          <h4 className="text-center">Enter Your City</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              id={styles.kuddus}
              name="name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {/* <Link to="/search">
              {" "} */}
            <button
              className={styles.button}
              id={styles.buttonkagu}
              type="submit"
            >
              Search
            </button>
            {/* </Link> */}
          </form>
        </div>
        <Details users={users} />
        <Hourinfo users={users} />
      </div>
    </>
  );
};
export default WeatherApp;
