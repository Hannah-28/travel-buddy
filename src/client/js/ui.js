// functions to handle ui changes
function weatherUpdates(data, tripLength, location) {
    const weather = document.getElementById('weather');
    const sunset = document.getElementById('sunset');
    const description = document.getElementById('weather-description');
    const triplength = document.getElementById('triplength');
    const tripCation = document.getElementById('trip-caption')

    //visibiltity of travel-info
    const travelInfo = document.getElementById('travel-info')
    const form = document.getElementById('form')

    travelInfo.setAttribute('visibility', 'visible');
    travelInfo.setAttribute('position', 'static');
    form.setAttribute('visibility', 'hidden');
    form.setAttribute('position', 'absolute');
    // weatherInfo.textContent = `Weather :
    //     Temperature = ${data.data[0].temp}
    //     Description = ${data.data[0].weather.description}
    //     Sunset = ${data.data[0].sunset} `;
    tripCation.textContent = `${location}`
    triplength.textContent = `trip length : ${tripLength}`
    weather.textContent = `Typical temperature for then :${data.data[0].temp}°c`
    sunset.textContent = `Sunset Time: ${data.data[0].sunset}`
    description.textContent = `Weather description :${data.data[0].weather.description}`
}

function pictureUpdate(pictureData) {
    const image = document.getElementById('image');
    image.src = pictureData.hits[0].userImageURL;
}
export {
    weatherUpdates,
    pictureUpdate
}