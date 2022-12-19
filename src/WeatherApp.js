import axios from "axios";
import React, { useEffect, useState } from "react";
// import styles from "./styles/Button.module.css";
const WeatherApp = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const weatherdata = async () => {
    try {
      const res = await axios.get(
        "https://api.weatherapi.com/v1/search.json?key=f1ebf70ae579424da7a100713221912&q=London"
      );
      setUsers(res.data);
    } catch (error) {
      setError(error.messege);
    }
  };
  useEffect(() => {
    weatherdata();
  }, []);
  console.log(users);
  return (
    <>
      {users &&
        users.map((user) => {
          const { id, region, lat } = user;
          return (
            <article key={id}>
              <h4>{region}</h4>
              <h4>{lat}0c</h4>
            </article>
          );
        })}
      {/* <div className="container" id={styles.body}>
        <h1 className="text-center">Weather-App</h1>
        <form className="pt-5 ">
          <h4 className="text-center">Enter Your City</h4>
          <input type="text" className="form-control" id={styles.kuddus} />
          <button className={styles.button} id={styles.buttonkagu}>
            Submit
          </button>
        </form>
      </div> */}
    </>
  );
};
export default WeatherApp;
