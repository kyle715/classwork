/*
global $
global navigator
*/
        
$(document).ready(function() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var temp;
            $.ajax({
                method: "GET",
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=3cb920f810af921ff25538043ed1a70b`,
                success: function(response) {
                    temp = response.main.temp;
                    $('#temp').text(temp.toFixed(0));
                    $('#description').text(response.weather[0].main);
                    $('#city').text(response.name);
                    document.getElementById('icon').innerHTML = '<img src="http://openweathermap.org/img/w/' + response.weather[0].icon + '.png">';
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