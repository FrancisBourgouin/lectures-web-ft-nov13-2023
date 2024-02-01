import { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CurrentWeather from "./components/CurrentWeather";
import CityHistory from "./components/CityHistory";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cities, setCities] = useState([]);

  const fetchWeatherData = (formData) => {
    const { city } = formData;
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setWeatherData(data);
        !cities.includes(data.name) && setCities([...cities, data.name]);
      })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      })
      .finally(() => console.log("All done!"));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={fetchWeatherData} />
        <CityHistory cities={cities} />
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
