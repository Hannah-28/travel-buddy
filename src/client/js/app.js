// global variables


// getting inputs
async function submitBtn() {
    //recieving location data.
    const location = document.getElementById('location').value;
    const travelDate = document.getElementById('tripdate').value;
    const endDate = document.getElementById('end-date').value;
    console.log(endDate);
    //sending location data to requests.js
    const data = await getWeatherInfo(location);
    // const triplength = tripLength(travelDate, endDate);
    Client.weatherUpdates(data, '20');
}


//Functions to process data
function tripLength(travelDate, endDate) {
    return '10';
}

//request Functions

async function getWeatherInfo(location) {
    const postData = await fetch("http://localhost:8000/postLocation", {
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

export {
    submitBtn,
}