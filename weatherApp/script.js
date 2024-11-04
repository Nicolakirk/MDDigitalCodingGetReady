const retrieveWeather = async (location) => {
console.log(location)
   
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location},uk&APPID=2412d3c20722b45b3d9ea5cfbafa9fd2`
 
    
   
   const response = await fetch(weatherURL);
   
   if (!response.ok) {
    throw new Error('Location not found, Please enter a UK location');
}
const data = await response.json();

console.log(data)
return data

};





document.getElementById("showCode").addEventListener("click", async function() {

    const locationInput = document.getElementById("locationInput").value; 
    const codeDisplay = document.getElementById("codeDisplay"); 

    // Clear 
    // codeDisplay.innerHTML = '';

    if (!locationInput) {
        codeDisplay.innerHTML = 'Please enter a location.';
        return;
    }

    try {
        const weather = await retrieveWeather(locationInput); 


        
        const temperature = Math.round(weather.main.temp -273.15); // Temperature
        const description = weather.weather[0].description; // Weather description
        const weatherLocation = weather.name
        const feelsLikeTemperature = Math.round(weather.main.feels_like -273.15);

        codeDisplay.innerHTML = `The weather in ${weatherLocation} now is :<br>Temperature: ${temperature}°C<br> Feels Like:${feelsLikeTemperature}°C<br>Description: ${description}`;
        
     
        
        
        
    } catch (error) {
        codeDisplay.innerHTML = `Error: ${error.message}`; 
    }
});