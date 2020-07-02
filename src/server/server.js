var path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();
require("babel-polyfill");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
const fetch = require('node-fetch');
// empty projectData
let projectData = {}

//server listening at port
const port = 6001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

function listener(port) {
    return `Example app listening on port $ { port }!`
}


//get requests
app.get('/', function(req, res) {
        res.sendFile(path.resolve('dist/index.html'))
    })
    // designates what port the app will listen to for incoming requests


//post requests
app.post('/postLocation', async(req, res) => {
    let location;
    location = req.body.location;
    const coordinates = await getLatLong(location);
    projectData.longitude = coordinates.geonames[0].lng;
    projectData.latitude = coordinates.geonames[0].lat;
    projectData.weatherInfo = await getCurrentWeatherInfo(projectData.latitude, projectData.longitude);
    projectData.pictureData = await getPicture(location);
    res.send(JSON.stringify({ weatherInfo: projectData.weatherInfo, picture: projectData.pictureData }))
});
console.log(process.env.API_KEY)

    //calling geoname
async function getLatLong(location) {
    //keys seem to be not working, so i have kept placeholders here. -need to be fixed Asap
    const url = `http://api.geonames.org/searchJSON?formatted=true&q=${location}&maxRows=10&lang=es&username=${process.env.key}&style=full`;
    const data = await fetch(url);
    return data.json();
}
// calling weatherbit to get curent weatherInfo
async function getCurrentWeatherInfo(lat, long) {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${process.env.key}`
    const data = await fetch(url);
    return data.json();
}
//getting picture from pixabay
async function getPicture(location) {
    const url = `https://pixabay.com/api/?key=${process.env.key}&q=${location}&category=places&image_type=photo&pretty=true`
    const data = await fetch(url);
    return data.json();
}
app.get("/servertest", function(req, res) {
    res.json({
        status: 200,
    });
});

module.exports = app;
