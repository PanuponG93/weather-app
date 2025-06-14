// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric`
      )
      .then((res) => setWeather(res.data));
  }, []);

  return (
    <div>
      <h1>สภาพอากาศกรุงเทพฯ</h1>
      {weather ? (
        <div>
          <p>อุณหภูมิ: {weather.main.temp} °C</p>
          <p>สภาพอากาศ: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>กำลังโหลด...</p>
      )}
    </div>
  );
}

export default App;
