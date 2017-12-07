/*
global $
global navigator
*/
        
$(document).ready(function() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            $.ajax({
                method: "GET",
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=3cb920f810af921ff25538043ed1a70b`,
                success: function(response) {
                    $('#temp').text(response.main.temp);
                    $('#description').text(response.weather[0].main);
                    $('#city').text(response.name);
                }
            });
        });
    }
});