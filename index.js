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

  let icon = document.querySelector("#t_icon");
  icon.innerHTML = `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/293/original/Subject_5.png?1728053061" class="temp_icon">`;

  let t_iconMapping = {
    "clear-sky-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/742/original/k_clearsky_day.png?1728337708",
    "clear-sky-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/743/original/k_clearsky2_night.png?1728337714",
    "few-clouds-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/744/original/k_fewclouds_day.png?1728337727",
    "few-clouds-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/745/original/k_fewclouds_night.png?1728337732",
    "scattered-clouds-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/746/original/k_scatteredclouds_day.png?1728337770",
    "scattered-clouds-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/747/original/k_scatteredclouds_night.png?1728337780",
    "broken-clouds-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/748/original/k_brokenclouds_day.png?1728337789",
    "broken-clouds-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/749/original/k_brokenclouds_night.png?1728337795",
    "shower-rain-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/751/original/k_showerain_day.png?1728337839",
    "shower-rain-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/752/original/k_showerrain_night.png?1728337852",
    "rain-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/753/original/k_rain_day.png?1728337860",
    "rain-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/754/original/k_rain_night.png?1728337867",
    "thunderstorm-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/755/original/k_thunderstorm_day.png?1728338364",
    "thunderstorm-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/756/original/k_thunderstorm_night.png?1728338370",
    "snow-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/757/original/k_snow_day.png?1728338380",
    "snow-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/758/original/k_snow_night.png?1728338386",
    "mist-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/759/original/k_mist_day.png?1728338397",
    "mist-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/760/original/k_mist_night.png?1728338403",
  };
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
