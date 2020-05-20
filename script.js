$(document).ready(function () {
  $("#button-addon1").click(function(){
    var city = $(".form-control").val();
    // if (city != ""){
      
    });
});
  

//This is the API key
var APIKey = "438d21396eadb2777d54f41c8be79e21";

var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {
    console.log(queryURL);

  });


  //Saves input info to local storage
  //$(".description9am").val(localStorage.getItem("#btn9am"));
