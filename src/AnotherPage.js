import React from "react";
import styles from "./styles/Button.module.css";
import { Link } from "react-router-dom";
const AnotherPage = (props) => {
  return (
    <>
      <h1 id={styles.homeheader1}>Welcome To Weather App</h1>

      <Link to="/">Go Back</Link>
    </>
  );
};

export default AnotherPage;
