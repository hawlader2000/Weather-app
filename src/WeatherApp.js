import styles from "./styles/Button.module.css";
import Details from "./Details";
import Hourinfo from "./Hourinfo";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WeatherApp = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState("");
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState();
  useEffect(() => {
    const weatherdata = async () => {
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=f64b2069f80741a0a7750643222212&q=${search}&days=5&aqi=no&alerts=no`
        );
        setUsers(res.data);
      } catch (error) {
        setError(error.messege);
      }
    };
    weatherdata();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    navigate("./anotherpage");
  };
  console.log(users);

  return (
    <>
      <div className="container" id={styles.body}>
        <div className="pt-5">
          <h4 className="text-center">Enter Your City</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              id={styles.kuddus}
              name="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button
              className={styles.button}
              id={styles.buttonkagu}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <Details users={users} />
      <Hourinfo users={users} />
    </>
  );
};
export default WeatherApp;
