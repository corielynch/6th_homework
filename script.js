$(document).ready(function () {
  $(".btn").click(function(){
    var city = $(".form-control").val();

    var APIKey = "438d21396eadb2777d54f41c8be79e21";

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
    
      .then(function(response) {
        console.log(response);

      });
    });
});
  

//This is the API key



  //Saves input info to local storage
  //$(".description9am").val(localStorage.getItem("#btn9am"));
