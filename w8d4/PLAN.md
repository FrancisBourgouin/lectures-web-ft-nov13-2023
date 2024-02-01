# Weather App

# Project Description

Fetches the weather based on a city, creates a button for new cities, fetches user position on first load

# User Stories

Features of the app, from the perspective of a user (How a user would use our app)

- A user should be able to go to our website, type in a city, and retrieve the weather for it
- A user should be able to quickly see the weather from previously searched cities, and see the weather for them
- A user should be able to search for the same city multiple times, without creating additional entries in the history

# Testing

End-to-End testing => From a user's perspective (User flow / feature-ish)

Integration testing => Function that converts the API call to something usable for our components,

Unit testing => K to Celsius conversion

# Packages

## Frontend

- CRA (Vite)
- Sass
- Axios

# Data structure

## City

```jsx
const city = "Toronto";
```

## Cities

```jsx
const cities = [city, city];
```

## Weather

```jsx
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 09fd719b4b698ec0260e424f83378e3d

// temperature : weatherResponse.main.temp - 273.15
// conditions : weatherResponse.weather[0].description
// name : weatherResponse.name

const weatherResponse = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

# HTML Structure

- body
  - header
    - h1 Super Weather App 🌩️🌪️🌞
  - main
    - section WeatherSearch
      - form
        - input
        - button
    - section SearchHistory
      - ul
        - li
          - button Name of city
    - section CurrentWeather
      - h1 weather for city
      - h2 currently : temp
      - p conditions

# Component Structure

# Steps

# APIs

- openWeatherAPI
