// js for project 1, DOGS
// written by Letty Bedard

$(function(){
  
  //  DECLARATIONS 
  //let recentPlaces = JSON.parse(localStorage.getItem("recentPlaces"));
  let thePlaces = [
    "Boston",
    "Miami",
    "Portsmouth"
];

  //  REFERENCES
  let $search = $("#search");
  let $input = $("#autocomplete");
  let $places = $("#popularPlaces");
  let $hamburger = $("#theHamburger");


  //  FUNCTIONS

  //empty and draw the sidebar
  function drawPlaces(){
    $places.empty();
    $hamburger.empty();
    thePlaces.forEach(function(element){
      let thisOne = $("<li>")
                      .addClass("place")
                      .text(element);
      $places.append(thisOne);
      thisOne = $("<li>")
                      .addClass("place")
                      .text(element);
      $hamburger.append(thisOne);
    });
  }

  //  EVENT LISTENERS

  //when search is clicked, return the map of that location and add to recent
  $(document).on("focusout", $input, function(){
    $("#dog").css("display", "hidden");
    let inputString = $input.text.trim();
    $input.text = "";
    if (recentPlaces === null){
      recentPlaces = [inputString];
    }
    else {
      recentPlaces.unshift("inputString");
    }
    showRecent();
  });

  //when a saved location is clicked, show that location
  $(document).on("click", ".place", function(){
    console.log(`${$(this).text()} was clicked`);
    //show that result in the map pane
  });

  //when reset recent is clicked, empty that div and clear local

  //when dog div is clicked, change the random dog

  drawPlaces();

});