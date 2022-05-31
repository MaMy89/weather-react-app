import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        <a href="https://github.com/MaMy89/weather-react-app">
          Open-source code
        </a>{" "}
        by Mari Myhrer
      </p>
    </div>
  );
}

export default App;
