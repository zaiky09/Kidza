async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Nairobi');
    const data = await response.json();
    console.log(data);
}

getWeather();
