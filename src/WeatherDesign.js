import React from "react";
import styles from "./styles/Button.module.css";
const WeatherDesign = (props) => {
  console.log({ props });
  return (
    <>
      {Object.keys(props.users).length > 0 && (
        <>
          <div className="card bg-primary" id={styles.card}>
            <p id={styles.cityText}>{props.users?.location?.name}</p>
            <p>{props.users?.location?.localtime}</p>
            <p>{props.users?.forecast?.forecastday[0].day?.avgtemp_c}°C</p>
          </div>
          {props.users?.forecast?.forecastday?.map((item) => (
            <>
              <div className="card bg-info" id={styles.card2}>
                <p id={styles.txt} className="text-danger">
                  Date: {item.date}
                </p>
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
};
export default WeatherDesign;
