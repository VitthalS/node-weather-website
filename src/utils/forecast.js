const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8967fad385453cee0601d9f01e984faa&query=' + latitude + ',' + longitude
    

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            
            callback('Unable to find location', undefined)
        } else {
            // console.log(response.body)
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degress out, But It feels like ' + body.current.feelslike + ' degress out and Humidity is '+body.current.humidity)
        }
    })
}

module.exports = forecast