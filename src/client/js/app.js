// global variables
const dateDiff = require("date-range-diff");

// getting inputs
async function submitBtn() {
    //recieving location data.
    const location = document.getElementById('location').value;
    const travelDate = document.getElementById('tripdate').value;
    const endDate = document.getElementById('end-date').value;
    //sending location data to requests.js
    const data = await getWeatherInfo(location);
    const weatherData = data.weatherInfo;
    const picture = data.picture;
    //dateDiff is from the date-range-diff package
    Client.weatherUpdates(weatherData, travelDuration(travelDate, endDate), location);
    Client.pictureUpdate(picture);
}

//function to calculate trip duration
function travelDuration(travelDate, endDate) {
    console.log(travelDate, endDate)
        //dateDiff is from the date-range-diff package
    return dateDiff(endDate, travelDate);
}

//request Functions
async function getWeatherInfo(location) {
    const postData = await fetch("http://localhost:3030/postLocation", {
        method: 'Post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: location
        })
    });
    return postData.json();
}

//exports

export {
    submitBtn,
    travelDuration
}