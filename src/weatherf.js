const request = require('request')

const weather = (latitude,longitude,callback) => {
    
    const url =  'http://api.weatherstack.com/current?access_key=6800d7a0e4d5dd6320c4e9ede17bca3f&query=37.8267,-122.4233'
    request({ url : url , json: true} ,(error,response) => {

        if(error)
         {
            callback('Unable to connect')
         }
         else if(response.body.error)
         {
            callback("Unable to find location")
         }
         else{
            callback(undefined,{
                latitude: response.body.current
        
            })
            }
        })
        }
        module.exports = weather
