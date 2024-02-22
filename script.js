const apiKey = "12ab4268c65303cc13ed93ba3432ec99";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector (".search input")

const searchBtn = document.querySelector (".search button")

const weatherIcon = document.querySelector (".weather-icon")


async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

console.log(data);
 

document.querySelector(".city").innerHTML = data.name;

document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";

document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 



if(data.weather[0].main == "Cloulds"){weatherIcon.src = "could.png";}

else if(data.weather[0].main == "Clear"){weatherIcon.src = "clear.png";}

else if(data.weather[0].main == "Rain"){weatherIcon.src = "rain.png";}

else if(data.weather[0].main == "Drizzile"){weatherIcon.src = "drizzle.png";}

else if(data.weather[0].main == "MOist"){weatherIcon.src = "mist.png";}
}
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value); })
