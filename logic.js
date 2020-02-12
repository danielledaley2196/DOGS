// js for project 1, DOGS
// written by Letty Bedard

$(function(){
  
  //  DECLARATIONS 
  let recentPlaces = null;
  let apiKey = "e289f98da0cc0e60eb332ebfc1bf33ee";

  //  REFERENCES
  let $search = $("#search");
  let $input = $("#autocomplete");
  let $places = $("#popularPlaces");
  let $hamburger = $("#theHamburger");
  let $theDog = $(".theDog");
  let $map = $("#map");

  //  FUNCTIONS

  //empty and draw the sidebar
  function drawPlaces(){
    $places.empty();
    $hamburger.empty();
    recentPlaces = JSON.parse(localStorage.getItem("recentPlaces"));
    if (recentPlaces !== null){
      recentPlaces.forEach(function(element){
      $places.append($("<li>")
                    .addClass("place")
                    .text(element));
      $hamburger.append($("<li>")
                        .addClass("place")
                        .text(element));
      });
      $places.append($("<li>")
                    .attr("id", "reset")
                    .css("font-weight", "bold")
                    .text("CLEAR ALL"));
      $hamburger.append($("<li>")
                    .attr("id", "reset")
                    .css("font-weight", "bold")
                    .text("CLEAR ALL"));
    }
    else {
      $places.append($("<li>")
                    .text("No recent searches"));
      $hamburger.append($("<li>")
                        .text("No recent searches"));
    }
  }

  //get current weather for location
  function getWeather(location){
    //let safe = encodeURI(location);
    let afterState = false;
    location = location.split(", ")
                        .join()
                        .slice(0,-1);
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`
    $.get(queryUrl).then(function(response){
      console.log(response);
      $(".temp").html(`Temp: ${Math.floor(response.main.temp)}&deg;F`);
      
      $(".windspeed").text(`Wind speed: ${response.wind.speed}m.p.h.`);
      
      $(".wIcon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='icon of weather'>");
    });
  }

  //getting location from mapping js
  window.getAutoLocation = function(address){
    recentPlaces = JSON.parse(localStorage.getItem("recentPlaces"));
    let inputString = $("#autocomplete").val();
    console.log(inputString);
    if (recentPlaces === null){
      recentPlaces = [inputString];
    }
    else {
      recentPlaces.unshift(inputString);
    }
    localStorage.setItem("recentPlaces", JSON.stringify(recentPlaces));
    getWeather(inputString);
    drawPlaces();
    let lat = address.geometry.location.lat
    console.log(lat);

    // placeName = address;
  };

  //  EVENT LISTENERS

  //when search is clicked, show the map and add to recent
  $(document).on("focusout", $input, function(){
    $theDog.addClass("isHidden");
    $map.removeClass("isHidden");
    $("#listing").removeClass("isHidden");
    drawPlaces();
  });

  //when a saved location is clicked, show that location
  $(document).on("click", ".place", function(){
    console.log(`${$(this).text()} was clicked`);
    //future: show that result in the map pane
  });

  //when reset recent is clicked, empty that div and clear local
  $(document).on("click", "#reset", function(){
    localStorage.removeItem("recentPlaces");
    drawPlaces();
  });

  //when dog div is clicked, change the random dog
  $(document).on("click", $theDog, function(){    
    $.get("https://api.thedogapi.com/v1/images/search").then(function(response){
    $theDog.empty();
    $theDog.append($("<img>")
                  .attr({
                    src: response[0].url,
                    class: "responsive-img"
                  }));
    })
  });
  
  
  drawPlaces();

});