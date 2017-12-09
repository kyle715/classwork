/*
global $
global navigator
global apiKey
*/ 
$(document).ready(function() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var temp;
            $.ajax({
                method: "GET",
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${apiKey.myKey}`,
                success: function(response) {
                    temp = response.main.temp;
                    $('#temp').text(temp.toFixed(0));
                    $('#description').text(response.weather[0].description);
                    $('#weather').text(response.weather[0].main);
                    $('#city').text(response.name);
                    document.getElementById('icon').innerHTML = '<img src="https://openweathermap.org/img/w/' + response.weather[0].icon + '.png">';
                    var weather = response.weather[0].main;
                    console.log(weather);
                        if (weather == 'clear sky') {
                            $('body').addClass('clearSky');
                        }else if (weather == 'few clouds'){
                             $('body').addClass('fewClouds');
                        }else if (weather == 'scattered clouds'){
                             $('body').addClass('scatteredClouds');
                        }else if (weather == 'broken clouds'){
                             $('body').addClass('brokenClouds');
                        }else if (weather == 'shower rain'){
                             $('body').addClass('showerRain');
                        }else if (weather == 'rain'){
                             $('body').addClass('rain');
                        }else if (weather == 'thunderstorm'){
                             $('body').addClass('thunderstorm');
                        }else if (weather == 'Snow'){
                            $('body').addClass('snow');
                        }else if (weather == 'mist'){
                             $('body').addClass('mist');
                        }
                }
            });
        });
    }
});
function changeTemp() {
    var temp = document.getElementById('temp').innerHTML;
    var fc = document.getElementById('FC').innerHTML;
    var far;
    var cel;
    if (fc == "C"){
      document.getElementById('FC').innerHTML = "F";
      far = temp * 1.8 + 32;
      document.getElementById('temp').innerHTML = far.toFixed(0);
    } else {
      document.getElementById('FC').innerHTML = "C";
      cel = (temp - 32) * .5556;
      document.getElementById('temp').innerHTML = cel.toFixed(1);
    }
}

$(document).ready(function () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            $.ajax({
                method: "GET",
                url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${apiKey.myKey}`,
                success: function (response){
                    $('#3HourTemp').text(response.list[0].main.temp.toFixed(0) + 'F');
                    $('#3HourDescription').text(response.list[0].weather[0].main)
                    document.getElementById('3HourIcon').innerHTML = '<img src="https://openweathermap.org/img/w/' + response.list[0].weather[0].icon + '.png">';
                    $('#6HourTemp').text(response.list[1].main.temp.toFixed(0) + "F");
                    $('#6HourDescription').text(response.list[1].weather[0].main)
                    document.getElementById('6HourIcon').innerHTML = '<img src="https://openweathermap.org/img/w/' + response.list[1].weather[0].icon + '.png">';
                    $('#9HourTemp').text(response.list[2].main.temp.toFixed(0) + 'F');
                    $('#9HourDescription').text(response.list[2].weather[0].main)
                    document.getElementById('9HourIcon').innerHTML = '<img src="https://openweathermap.org/img/w/' + response.list[2].weather[0].icon + '.png">';
                    $('#12HourTemp').text(response.list[3].main.temp.toFixed(0) + 'F');
                    $('#12HourDescription').text(response.list[3].weather[0].main)
                    document.getElementById('12HourIcon').innerHTML = '<img src="https://openweathermap.org/img/w/' + response.list[3].weather[0].icon + '.png">';
                }
            });
        });
    }
});
