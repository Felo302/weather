"use strict"

const urlname = "http://api.openweathermap.org/data/2.5/weather?q=Milton&appid=ffb41b744b6eeaabf18134ae898a5d75";


$.ajax ({
    url: urlname,
    success: function(result){
        console.log(result);
        console.log(result.name);
        console.log(result.weather[0].description)
        // display the temperature
        let displaycity = `Current weather in ${result.name}`;
        $("#location").html(displaycity);

        let f = Math.round(result.main.temp * (9 / 50) - 459.67); // this varialble is not a string. so you have to change it to string.
        let fahrenheit = f.toString();
        $("#temp").text(fahrenheit);

        let windSpeed = Math.round(result.wind.speed / .44704);// this varialble is not a string. so you have to change it to string.
        let wind = windSpeed.toString();
        $("#wind").text(wind);

        let skydisplay = `Today's ${result.weather[0].description}`
        $("#sky").html(skydisplay);
    }
})