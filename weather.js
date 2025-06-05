

// let latitude = 82.9071;
// let longitude = 40.4173;

 async function getWeatherByCoords() {
      const lat = document.getElementById("lat").value;
      const lon = document.getElementById("lon").value;
      const apiKey = `2fbd9699d233f9a62393d4f5aa7d15f7`;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Location not found");

        const data = await response.json();

        const weatherInfo = `
          <h2>Weather in ${data.name || 'Unknown Location'}</h2>
          <p><strong>Description:</strong> ${data.weather[0].description}</p>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

        const infoBox = document.getElementById("weatherInfo");
        infoBox.innerHTML = weatherInfo;
        infoBox.style.display = "block";

      } catch (error) {
        alert("Error fetching weather data: " + error.message);
      }
    }