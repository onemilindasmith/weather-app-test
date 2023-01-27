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
    let location = document.querySelector("#city");
    console.log(location.value);
    location.innerHTML = `${location.value}`;
  }

  let city = document.querySelector("button");
  city.addEventListener("click", searching);
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
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

{
  let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=6.1357568&lon=-80.1308672&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric";

  function myTemp(response) {
    console.log(response.data);
    let temp = Math.round(response.data.main.temp);
    let newTemp = document.querySelector("h1");
    newTemp.innerHTML = `${temp}`;
  }
  let homeTemp = document.querySelector("#currentLoca");
  homeTemp.addEventListener("click", homeTemp);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(myTemp);
}
