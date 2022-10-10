const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=efc093c50661b556eaee4c5d32ac820f&query='+latitude+','+longitude

    request({url:url, json:true},(error,response)=>{
        if (error) {
            callback('OOPS!! Something gone wrong', undefined)
        } else if (response.body.error) {
            callback('OOPS!! Something gone wrong', undefined)
        } else {
            callback(undefined,'It is currently '+response.body.current.temperature+' degrees out.\n'+'It feels like '+response.body.current.feelslike+' degrees out.')
        }
    })
}

module.exports = forecast