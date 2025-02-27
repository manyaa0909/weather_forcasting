const apiKey = "0e266119d705ab314278f4b3dc80520b";

document.addEventListener("DOMContentLoaded", () => {
    async function checkWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        if (response.ok) {
            var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            document.querySelector(".img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        } else {
            alert("City not found");
        }
    }

    document.querySelector(".btn").addEventListener("click", () => {
        const city = document.querySelector(".inp").value;
        checkWeather(city);
    });

    // Initial call to display weather for default city
    checkWeather("delhi");
});
