// 

$(document).ready(function() {

    // after the page loads, we're clicking the button
    $(document).on('click', '#btn', function() {

        // http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,California%appid=&appid=c9eb46f3df9cee8ce25c1e453684eb6b

        // your code here (build up your url)
        var url = "http://api.openweathermap.org/data/2.5/weather?q="
        var city = $('#city').val();
        var units = "&units=Imperial"
        var app_id = "&appid=c9eb46f3df9cee8ce25c1e453684eb6b"


        $.get(url + city + units + app_id, function(res) {
            console.log(res)
            $('.cityname').html(res.name);
            $('.current_temp').html("Temperature: " + res.main.temp + "°F");
            $('.low').html("Low: " + res.main.temp_min + "°F");
            $('.high').html("High: " + res.main.temp_max + "°F");
            $('.description').html(res.weather[0].description);
            
        }, 'json');

        // don't forget to return false so the page doesn't refresh
        return false;

    });
    
});