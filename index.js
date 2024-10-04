function updateWeatherinfo(response) {
  let temperatureElement = document.querySelector("#temp_value");
  let cityElement = document.querySelector("#cities");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityTempDescription = document.querySelector("#temp_description");
  cityTempDescription.innerHTML = response.data.condition.description;

  let cityHumidity = document.querySelector("#T_humidity");
  cityHumidity.innerHTML = `${response.data.temperature.humidity}%`;

  let cityWind = document.querySelector("#T_wind");
  cityWind.innerHTML = `${response.data.wind.speed}km/h`;

  let cityTime = document.querySelector("#city_time");
  let date = new Date(response.data.time * 1000);
  cityTime.innerHTML = formatDate(date);
}

function formatDate(date) {
  let day = date.getDay();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day1 = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day1}, ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "c69690dffef27at0b043of215d340482";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherinfo);
}

function handleSearchSubmit(event) {
  event.preventDefault(); //to stop the page from loading EVERY SINGLE ANNOYING TIME
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);

searchCity("Aberdeen"); //to make this the default city when its loaded
