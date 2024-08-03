const express = require('express')
const app = express()
const port = 3000
var requests = require('requests')

const fs = require('fs');

const axios = require('axios')

const path = require('path')

const bodyParser = require('body-parser');

const cors = require('cors')

const homeFile = fs.readFileSync("./home.html", "utf-8");

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) =>{
  // fs.readFileSync
  res.sendFile(path.join((__dirname), "home.html"));
})


app.post('/api/data', async (req, res) => {
    try {

      var inputData = req.body.city;

      console.log(inputData)
        const geoCodeUrl = `https://geocode.maps.co/search?q=${inputData}&api_key=66848574c1d54564731195mzb93e544`;
        
        // Fetch coordinates
        const geoResponse = await axios.get(geoCodeUrl);
        const { lat, lon, display_name } = geoResponse.data[0]; // Assuming response data is an array with coordinates

      let nameArray = display_name.split(",");
      let cityName = `${nameArray[0]}`+","+`${nameArray[nameArray.length-1]}`;
      


        // Fetch weather data
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e7664300b8d408601d80d74b1adc972b`;
        const weatherResponse = await axios.get(weatherUrl);
        const weatherData = weatherResponse.data;
        weatherData['cityName']= cityName

        // Return response to client
        res.json({ status: true, data: weatherData });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ status: false, error: 'Internal Server Error' });
    }
});

  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
