import React from "react";
import styles from "./styles/Button.module.css";
const Hourinfo = (props) => {
  return (
    <>
      {Object.keys(props.users).length > 0 && (
        <>
          <h3 className="text-primary">Hourly forecast</h3>
          {props.users?.forecast?.forecastday[0]?.hour?.map((item) => (
            <>
              <div className="card bg-info" id={styles.card2}>
                <p className="text-primary">Hour: {item.time.slice(10, 16)}</p>
                <p className="text-danger">Temp: {item.temp_c}°C</p>
                <p className="text-danger">Humidity: {item.humidity}</p>
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Hourinfo;
