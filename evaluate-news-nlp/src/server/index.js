const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// app.get('/test', function (req, res) {
//   res.send(mockAPIResponse)
// })

// app.post('/test', (req,res) => {
//
// })

app.post('/test', async function (req, res) {
    const app_key = process.env.API_KEY
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${app_key}&url=${req.body.url}&lang=en`
    let response = await fetch(apiUrl)
    let data = await response.json()

    const evaluation = {}
    evaluation.polarity = data.score_tag
    evaluation.agreement = data.agreement
    evaluation.irony = data.irony
    evaluation.subjectivity = data.subjectivity
    evaluation.confidence = data.confidence
    res.send(evaluation)
    console.log(apiUrl)
    console.log(evaluation)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

console.log(`Your API key is ${process.env.API_KEY}`);
