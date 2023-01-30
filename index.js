{
  let current = document.querySelector("#currently");
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[4];
  let hour = now.getHours();
  let minute = now.getMinutes();

  current.innerHTML = `${day} ${hour}:${minute}`;

  function searching(event) {
    event.preventDefault();
    let cityInput = document.querySelector("form input");
    searchCity(cityInput.value);
  }

function searchCity(city) {
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

  let city = document.querySelector("form");
  city.addEventListener("submit", searching);
}

{
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=6.1357568&lon=-80.1308672&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric";

  function showTemp(response) {
    console.log(response.data);
    let degrees = Math.round(response.data.main.temp);
    let newTemp = document.querySelector("#real-Temp");
    newTemp.innerHTML = `${degrees}`;

    let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;

  }

let current = document.querySelector("#currently");
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[4];
let hour = now.getHours();
let minute = now.getMinutes();

current.innerHTML = `${day} ${hour}:${minute}`;

function searching(event) {
  event.preventDefault();
  let cityInput = document.querySelector("form input");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let city = document.querySelector("form");
city.addEventListener("submit", searching);

function showTemp(response) {
  console.log(response.data);
  let degrees = Math.round(response.data.main.temp);
  let newTemp = document.querySelector("#real-Temp");
  newTemp.innerHTML = `${degrees}`;

  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
}

function myTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

function getLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let homeTemp = document.querySelector("#currentLoca");
homeTemp.addEventListener("click", myTemp);

}
