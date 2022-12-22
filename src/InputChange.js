import React, { useState } from "react";

const InputChange = () => {
  const [city, setCity] = useState();
  const handleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };
  const handleSearch = () => {
    InputChange(city);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter your City"
          onChange={handleChange}
          value={city}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
      <p>{city}</p>
    </>
  );
};

export default InputChange;