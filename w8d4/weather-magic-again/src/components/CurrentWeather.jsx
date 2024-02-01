export default function CurrentWeather(props) {
  const { weatherData } = props;

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const conditions = weatherData.weather[0].description;
  const name = weatherData.name;

  return (
    <section className="CurrentWeather">
      <h1>Current Weather for {name}</h1>
      <p>Currently {temperature}°C</p>
      <p>It's {conditions}.</p>
    </section>
  );
}
