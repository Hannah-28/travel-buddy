// functions to handle ui changes
function uiUpdates(data) {
    const weatherInfo = document.getElementById('weather');
    console.log(data);
    weatherInfo.textContent = `Weather :
        Temperature = ${data.data[0].temp}
        Description = ${data.data[0].weather.description}
        Sunset = ${data.data[0].sunset} `
}
export {
    uiUpdates
}