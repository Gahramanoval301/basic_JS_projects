const apiKey = '75bba0613fb83b6d30267623cc6cb43f';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.maxHeight = '37.5rem';
    } else {


        var data = await response.json();


        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';
        }

        document.querySelector('.weather').style.maxHeight = '37.5rem';
        document.querySelector('.error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})