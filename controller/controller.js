var weather = require("Openweather-Node")
var request = require("superagent")
var util = require("util")

weather.setAPPID("898243f3f307b291478599d072c0e854");
weather.setCulture("fr");
weather.setForecastType("daily");

var controller = {
  getInfo : function(req, res, next){
    var city = req.params.city
    request
      .get('https://restcountries.eu/rest/v1/capital/'+ city)
      .end(function (err, response) {
        if (err) {
          console.log(err);
        }
        response = JSON.parse(response.text)
      //  res.json(response);
        weather.now(response[0].capital, function(err, aData)
        {
            // console.log('ini response[0].name ', response[0].name);
            // console.log('ini aData ', aData);
            if(err) console.log(err);
            else
            {
              res.json({
                city_detail : response[0],
                weather_detail: aData
              })
                // aData.getKelvinTemp())
                // console.log(aData.getDegreeTemp())
                // console.log(aData.getFahrenheitTemp())
            }
        })
      })
  }
}

module.exports = controller
