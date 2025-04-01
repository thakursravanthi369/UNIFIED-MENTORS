document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherButton = document.getElementById("get-weather");
    const weatherInfo = document.getElementById("weather-info");

    const API_KEY = "your_api_key_here";

    getWeatherButton.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (city === "") {
            weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
            return;
        }

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            if (!response.ok) throw new Error("City not found");
            
            const data = await response.json();
            const { temp } = data.main;
            const { description, icon } = data.weather[0];
            
            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <p>${temp}°C - ${description}</p>
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon">
            `;
        } catch (error) {
            weatherInfo.innerHTML = "<p>Could not fetch weather data. Try again.</p>";
        }
    });
});