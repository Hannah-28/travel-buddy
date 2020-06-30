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

function pictureUpdate(pictureData) {
    const image = document.getElementById('image');
    image.src = pictureData.hits[0].userImageURL;
}
export {
    weatherUpdates,
    pictureUpdate
}