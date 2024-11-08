const request = require('request');



const forecast = (latitude, longitude, callback) => {
    const url =
    "http://api.weatherapi.com/v1/current.json?key=21c5f04b13ea43818f063526240511&q=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback(error, undefined);
      console.log("Unable to connect to weather service!");
    } else if (response.body.error) {
      callback(response.body.error, undefined);
      console.log("Error:", response.body.error.message);
    } else {

        const name = response.body.location.name;
        const state = response.body.current.condition.text;
        const temp = response.body.current.temp_c;
        callback(undefined, name + " It Is " + state + " and temp is " + temp);
    }
  });
};
module.exports = { forecast };
