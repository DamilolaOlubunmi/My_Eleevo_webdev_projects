const apikey = "2ba650618e994e4bb22184730251008";
    

function fetchWeather() {
    const city = document.getElementById("city").value.trim();
    const display = document.getElementById("weatherdisplay");

    if(!city){
        display.innerHTML = "<p> Please enter a city name. </p>";
        return;
    }

    display.innerHTML = "<p class = 'loading'>Loading.....</p>";

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`).then(res=>{
        if(!res.ok)
            throw new Error("City not found");
        return res.json();
    }).then(data=>{
        display.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: 🌡${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <p>☁</p>
        `;
    }).catch(()=>{
        display.innerHTML = "<p>Error fetching data. Try again.</p>"
    });
}