function updateWeatherinfo(response) {
  let temperatureElement = document.querySelector("#temp_value");
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
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

searchCity("Aberdeen");
