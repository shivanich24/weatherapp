const API_key = "532ea68dfd5aeb5900a5b94cc5c13420";

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML=  `<h2>LOADING...........<h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  showWeather(data);
};

const showWeather = (data) => {
    console.log(data)
    if(data.cod == 404){
        weather.innerHTML=`<h2>
        CITY NOT FOUND
        </h2>`
        return;
    }
  weather.innerHTML = `
  <div>
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>

<div>
  <h2> ${data.main.temp}&#8451</h2>
  <h4>${data.weather[0].main}</h4>
</div>
  
  `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
