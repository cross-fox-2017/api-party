var weather = require('npm-openweathermap');

// api_key is required. You can get one at http://www.openweathermap.com/
weather.api_key = '2b9939c2646b67990fd3fde583b7a225';

// OPTIONAL: you can set return temperature unit.
// 'k' for Kelvin
// 'c' for Celsius
// 'f' for Fahrenheit
weather.temp = 'c';

weather.get_weather_custom('city', 'London', 'forecast').then(function(res){
    console.log(res);
},function(error){
    console.log(error)
})
