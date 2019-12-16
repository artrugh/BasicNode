const axios = require('axios')
const [city = "berlin"] = process.argv.slice(2);

const {my_app_key} = require("./keys");

const baseurl = "http://api.openweathermap.org/data/2.5/weather?q=";
const unit = "&units=metric"
let url = `${baseurl}${city}${unit}${my_app_key}`

axios
  .get(url)
  .then(res => {  
    const data = res.data;
    console.log(`It is now ${data.main.temp} °C in ${data.name}, ${data.sys.country}.`);
    console.log( `The current weather conditions are: ${data.weather[0].description}.`);
  })
  .catch(error => {
    console.error(error);
  });

