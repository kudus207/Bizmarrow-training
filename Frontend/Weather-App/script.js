let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=85bb4819c50c37690bf40d1fb8aeb23d";



const searchBtn = document.getElementById("search-button");
const input = document.getElementById("input");
const searchPara = document.getElementById("search-para");
const weatherData = document.querySelector(".weather-data");
const snowyDay = document.getElementById("snowy");
const rainyDay = document.getElementById("rainy");
const cloudyDay = document.getElementById("cloudy");
const sunnyDay = document.getElementById("sunny");

searchBtn.addEventListener("click", () => {
    if (input.value === "") {
        searchPara.innerText = "Please enter a city name";
        weatherData.style.display = "none"
        setTimeout(() => {
            searchPara.innerText = "";
        }, 3000);

    } else {
        fetchWeatherData();
    }
})


// function to fetch weather details
async function fetchWeatherData() {
    let newUrl = apiUrl.replace("{city name}", input.value);

    try {
        let result = await fetch(newUrl)
        // console.log(result);
        if (result.ok == false) {
            weatherData.style.display = "none"
            return searchPara.innerText = result.statusText
        }

        weatherData.style.display = "block"
        let data = await result.json();
        console.log(data);
        


        document.getElementById("cityName").innerText = data.name
        document.getElementById("condition").innerText = data.weather[0].main
        document.getElementById("condition-state").innerText = data.weather[0].description
        document.getElementById("temp").innerText = Math.round(data.main.temp -  273.15)  + "°C"
        document.getElementById("humidity").innerText = data.main.humidity
        document.getElementById("wind-speed").innerText = data.wind.speed

        let condition = data.weather[0].main;

        snowyDay.style.display = "none";
        rainyDay.style.display = "none";
        cloudyDay.style.display = "none";
        sunnyDay.style.display = "none";
        

        if (condition === "Snow") {
            snowyDay.src = "Images/clouds.png";
            snowyDay.style.display = "block";

        } else if (condition === "Rain") {
            rainyDay.src = "Images/heavy-rain.png";
            rainyDay.style.display = "block";

        } else if (condition === "Clouds") {
            cloudyDay.src = "Images/snowy.png";
            cloudyDay.style.display = "block";

        } else if (condition === "Clear") {
            sunnyDay.src = "Images/sun.png";
            sunnyDay.style.display = "block";
        }
        
    } catch (error) {

        if (error) {
            weatherData.style.display = "none"
            searchPara.innerText = error.message + " check your internet"
        }

    }

}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// let str = "helli"
// str.replace("i", "o")

