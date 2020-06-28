var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('dist'))


//server listening at port 8000
app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
})





app.get('/', function(req, res) {
        res.sendFile(path.resolve('dist/index.html'))
    })
    // designates what port the app will listen to for incoming requests


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})