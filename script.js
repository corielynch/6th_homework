$(document).ready(function () {
  $(".btn").click(function(){
    event.preventDefault(); 
    var city = $(".form-control").val();

    var APIKey = "438d21396eadb2777d54f41c8be79e21";

//URL for City, Temp, Humidity, Wind Speed
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;



//AJAX call
    $.ajax({
        url: queryURL,
        method: "GET",
        datatype: "JSON"
      })
    
      .then(function(response) {
        console.log(response)

  // Transfer content to HTML
  $(".card-body-main").html("<h1>" + response.city.name + " Weather Details</h1>");
        
  // Convert the temp to fahrenheit
var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;


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
      console.log(response)
      
      
      $(".uv-index-display").text("UV Index: " + response.value + " %");
      console.log(response.value);



        // add temp content to html
        // $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

  //       Saves input info to local storage
  // $(".description9am").val(localStorage.getItem("#btn9am"))

        
      });
    });
})
});
