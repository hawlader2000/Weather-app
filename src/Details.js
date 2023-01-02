import React from "react";
import styles from "./styles/Button.module.css";
const Details = (props) => {
  return (
    <>
      {Object.keys(props.users).length > 0 && (
        <>
          <div className="card bg-primary" id={styles.card}>
            <p id={styles.cityText}>{props.users?.location?.name}</p>
            <p>{props.users?.location?.localtime}</p>
            <p>{props.users?.forecast?.forecastday[0].day?.avgtemp_c}°C</p>
          </div>
          <h3 className="text-danger">Daily forecast</h3>
          {props.users?.forecast?.forecastday?.map((item) => (
            <>
              <div className="card bg-info" id={styles.card2}>
                <div id={styles.txt} className="text-danger">
                  <p>Date: {item.date}</p>
                  <p>Sunset: {item.astro.sunset}</p>
                  <p>SunRise: {item.astro.sunrise}</p>
                </div>
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
};
export default Details;
