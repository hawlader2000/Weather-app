import axios from "axios";
import React, { useEffect, useState } from "react";
// import styles from "./styles/Button.module.css";
const WeatherApp = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState(null);
  const weatherdata = async () => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast/?q=Dhaka&lat=44.34&lon=10.99&appid=1f837e4a80bf0625ccace7ae31c428d4"
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
      <p>{users?.list[0]?.dt_txt}</p>
      <p>{users?.list[0]?.main?.temp}</p>
      <p>{users?.list[0]?.weather[0]?.main}</p>
      {/* {users &&
        users.map((user) => {
          const { list, temp } = user;
          return (
            <article>
              <h4>{temp}</h4>
            </article>
          );
          
        })} */}
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
