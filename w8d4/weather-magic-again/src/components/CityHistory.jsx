export default function CityHistory(props) {
  const { cities } = props;

  const parsedCities =
    Array.isArray(cities) && cities.map((city) => <button key={city}>{city}</button>);

  return <section className="CityHistory">{parsedCities}</section>;
}
