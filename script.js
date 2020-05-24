$(document).ready(function () {
  $("#button-addon1").click(function(){
    event.preventDefault(); 
    var city = $(".form-control").val();
    var APIKey = "438d21396eadb2777d54f41c8be79e21";

//URL for City, Temp, Humidity, Wind Speed
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

//Append search items to History
var input = $(".form-control");
localStorage.setItem(".form-control", input.val());

var storedValue = localStorage.getItem(".form-control");

//THIS PART DOESNT WORK TO APPEND NEW BUTTON!!!/////
// var searchHistory = $("#historybtn");
// ("#historybtn").append(storedValue);



//AJAX call for City, Temp, Humidity, Wind Speed
    $.ajax({
        url: queryURL,
        method: "GET",
        datatype: "JSON"
      })


//Retrieving forecast data
      .then(function(response) {
        var dayOne = $("#dayOneForecast");
        var dayTwo = $("#dayTwoForecast");

        for (let i=0; i < response.list.length; i++) {
          var item = (response.list[i]);
    
          if (item.dt_txt.indexOf("12:00:00") != -1) {
            var date = new Date(item.dt_txt);
            console.log(date);

//Forecast Day 1
            $(".card-one .card-date").text("Date: " + date);
            dayOne.append(".card-date");

            var temp = (item.main.temp - 273.15) * 1.80 + 32;
            $(".card-temp").text("Temp: " + temp.toFixed(2)+ "°F");
            dayOne.append(temp);

            var humidity = (item.main.humidity);
            $(".card-humidity").text("Humidity: " + humidity + "%");

//Forecast Day 2
            $(".card-two .card-date").text("Date: " + date);
            dayTwo.append(".card-date-two");

            var temp = (item.main.temp - 273.15) * 1.80 + 32;
            $(".card-temp-two").text("Temp: " + temp.toFixed(2)+ "°F");
            dayTwo.append(temp);

            var humidity = (item.main.humidity);
            $(".card-humidity").text("Humidity: " + humidity + "%");
          }

//For loop for days 2-5 of forecast
          // for (let i=0; i < response.list.length; i++)
          

        



        
// Convert the Temp to Fahrenheit
var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;

// Transfer content to HTML
$(".card-body-main").html("<h1>" + response.city.name + " Weather Details</h1>");

$(".temperature-display").text("Temp: " + tempF.toFixed(2)+ "°F");

$(".humidity-display").text("Humidity: " + response.list[0].main.humidity + " %");
 
$(".wind-speed-display").text("Wind speed: " + response.list[0].wind.speed + " MPH");

//URL for UV Index
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;

//AJAX call for UV Index
    $.ajax({
      url: uvIndexURL,
      method: "GET",
      datatype: "JSON"
    })

    .then(function(response) {
      
      
      $(".uv-index-display").text("UV Index: " + response.value + " %");
        
      });
    }});

    //       Saves input info to local storage
  // $(".description9am").val(localStorage.getItem("#btn9am"))
  
  
})
});
