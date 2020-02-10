// js for project 1, DOGS
// written by Letty Bedard

$(function(){
  
  //  DECLARATIONS 
  let recentPlaces = null;

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
    }
    else {
      $places.append($("<li>")
                    .text("No recent searches"));
      $hamburger.append($("<li>")
                        .text("No recent searches"));
    }
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
    drawPlaces();

    // console.log (address);
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