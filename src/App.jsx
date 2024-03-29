import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import CSS file

const apikey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
      setData(response.data);
    } catch(error) {
      console.log(error);
      alert("City not found");
    }
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <h1 className="navbar-brand">Weather App</h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="input-container">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City name"/>
          <button onClick={fetchData}>Fetch</button>
        </div>

        {data && (
          <div className="weather-info">
            <h2>Weather Information for {city}</h2>
            <div className="info-item">City: {data.name}</div>
            <div className="info-item">Description: {data.weather[0].description}</div>
            <div className="info-item">Temperature: {data.main.temp}</div>
            <div className="info-item">Humidity: {data.main.humidity}</div>
            <div className="info-item">Wind Speed: {data.wind.speed}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
