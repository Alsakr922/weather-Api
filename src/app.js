
const forecast = require("./forecast.js");
const geocode = require("./geocode.js");


geocode.geocode('egypt' , (err, res) => {
    return forecast.forecast(res.longitude, res.latitude , (err , res) => {
        console.log("Res: " + res)
    });
    
})
