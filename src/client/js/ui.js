// functions to handle ui changes
function weatherUpdates(data, tripLength) {
    const weatherInfo = document.getElementById('weather');
    const triplength = document.getElementById('triplength');

    weatherInfo.textContent = `Weather :
        Temperature = ${data.data[0].temp}
        Description = ${data.data[0].weather.description}
        Sunset = ${data.data[0].sunset} `;
    triplength.textContent = `trip length : ${tripLength}`
}

export {
    weatherUpdates
}