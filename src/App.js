import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from "./WeatherApp";
import AnotherPage from "./AnotherPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/anotherpage" element={<AnotherPage />} />
          <Route path="/" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
