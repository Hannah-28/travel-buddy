// global variables


// getting inputs
async function submitBtn() {
    //recieving location data.
    const location = document.getElementById('location').value;
    const travelDate = document.getElementById('tripdate').value;
    const endDate = document.getElementById('end-date').value;
    //sending location data to requests.js
    const data = await getWeatherInfo(location);
    Client.weatherUpdates(data, '20');
    const triplength = tripLength(travelDate, endDate);
}


//Functions to process data
function tripLength(date1, date2) {
    console.log(date1.getDate());
    var date1 = new Date(date2);
    var date2 = new Date(date1);
    var diffDays = date2.getDate() - date1.getDate();
    alert(diffDays)
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