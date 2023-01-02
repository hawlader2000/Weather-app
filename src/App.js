import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import WeatherApp from "./WeatherApp";
import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/search" element={<Details />} />
        </Routes>
        <WeatherApp />
      </BrowserRouter>
    </>
  );
}

export default App;
