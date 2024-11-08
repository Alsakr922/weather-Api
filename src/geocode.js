const request = require('request');

const geocode = (address , callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYWxzYWtyIiwiYSI6ImNtMzQ0YW9kazFmcXQybnNodnBoM2thMm8ifQ.u_GdC_vhYP29ThXnLqC9pQ"

    request({url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to the geocoding service!', undefined)
        } else if(response.body.features.length === 0){
            callback('No matching locations found.', undefined)
        } else {
            const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];
            callback(undefined, { latitude: latitude, longitude: longitude });
        }
    })
}
module.exports = {geocode}