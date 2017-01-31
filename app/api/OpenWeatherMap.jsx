var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?units=metric&appid=cfdd6a9b4599b4ad98c98e521aae31ae&q=';

module.exports = {
  getTemp : function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      if(res.data.code && res.data.message){
        throw new Error(res.data.message);
      }
      else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
};
