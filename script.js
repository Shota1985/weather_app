const weatherDisplay = document.querySelector(".container");
const API_KEY = "0b484e6cbf7417fd9ab8c8e8bb2e729f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const input = document.querySelector(".input");
const today = new Date(Date.now());
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

async function fetchData(url, querry) {
  const response = await fetch(
    url + querry + "&appid=" + API_KEY + "&units=metric"
  );
  const data = await response.json();
  renderWeather(data);
  return data;
}

console.log(await fetchData(BASE_URL, "q=moscow"));

function renderWeather(response) {
  weatherDisplay.innerHTML = "";
  const weatherPropert = document.createElement("div");
  weatherPropert.innerHTML = `<button class="curent">
        <img
          class="location__icon"
          src="./pictures/src/current location icon.png"
          alt="location__icon"
        />Curent location
      </button>
  <div class="weather__data">
        <p class="location">${response.name}</p>
        <p class="date__day">${today.toLocaleDateString("en-US", options)}</p>
        <p class="temprechar">${Math.round(response.main.temp)}°C</p>
        <div>
          <img class="weather__picture" src="${
            response.weather[0].icon
          }" alt="weather__look" />
          <p class="weather__description">${response.weather[0].description}</p>
        </div>
      </div>`;
  weatherDisplay.append(weatherPropert);
}
