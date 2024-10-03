function handleSearchSubmit(event) {
  event.preventDefault(); //to stop the page from loading EVERY SINGLE ANNOYING TIME
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = searchInput.value;
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
