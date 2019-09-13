const request=require('request')


const forecast = (latitude, longitude, callback) => {
    const url="https://api.darksky.net/forecast/88deaf56724b43f425c04c603188f015/"+ encodeURIComponent(latitude) +","+ encodeURIComponent(longitude) +"?units=si&lang=es"
    
    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback("Unable to connect to weather service!",undefined)
        } else if (body.error) {
            callback("Unable to find location");
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently: " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability*100 +"% chance of rain. Max temp:"+ body.daily.data[0].temperatureHigh +"ºC. Min temp:"+ body.daily.data[0].temperatureLow + "ºC." );
        }
        
        
    }) 

}
module.exports=forecast