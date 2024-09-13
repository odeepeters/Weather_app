document.getElementById('fetchWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city.');
        return;
    }

    const apiKey = '3c6736c045398adc8b92145f506c6962'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').innerText = `Location: ${data.name}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            } else {
                alert('City not found.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data.');
        });
});


// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); // Verify if the data is returned correctly
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

