const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidmVua2F0MTIiLCJhIjoiY2w4b2lwbGgyMGJ4aDQxcnVkOG96ODNyMCJ9.IXVjVv0-T2TgyAyr1EMTRA&limit=1'
    request({url:url,json:true},(error,response)=>{
        if (error) {
            callback('OOPS! Something is wrong', undefined)
        } else if (response.body.features.length === 0) {
            callback('OOPS! Something is wrong', undefined)
        } else {
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode