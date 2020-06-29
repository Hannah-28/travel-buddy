var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
const fetch = require('node-fetch');
// empty projectData
let projectData = {}

//server listening at port 8000
app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
})


//get requests




app.get('/', function(req, res) {
        res.sendFile(path.resolve('dist/index.html'))
    })
    // designates what port the app will listen to for incoming requests


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


//post requests
app.post('/postLocation', async(req, res) => {
    let location;
    location = req.body.location;
    const coordinates = await getLatLong(location);
    projectData.latitude = coordinates.geonames[0].lng;
    projectData.longitude = coordinates.geonames[0].lat;
    projectData.weatherInfo = await getCurrentWeatherInfo(projectData.latitude, projectData.longitude);
    res.send(JSON.stringify(projectData.weatherInfo))
});

//calling geoname
async function getLatLong(location) {
    const url = `http://api.geonames.org/searchJSON?formatted=true&q=${location}&maxRows=10&lang=es&username=samrood&style=full`;
    const data = await fetch(url);
    return data.json();
}
// calling weatherbit to get curent weatherInfo
async function getCurrentWeatherInfo(lat, long) {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=7ced570754844545b5ecaf5b7cf625f7`
    const data = await fetch(url);
    return data.json();
}