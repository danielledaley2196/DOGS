// js for project 1, DOGS
// written by Letty Bedard

$(function(){
  
  //  DECLARATIONS 
  //let recentPlaces = JSON.parse(localStorage.getItem("recentPlaces"));
  let thePlaces = [{
    place: "Boston",
    latitude: 123,
    longitude: 456
  },{
    place: "Miami",
    latitude: 321,
    longitude: 654
  }];

  //  REFERENCES
  let $search = $("#search");
  let $input = $("#input");
  let $mapSpot = $("#theMap");
  let $places = $("#popularPlaces");
  let $hamburger = $("#theHamburger");

  //  FUNCTIONS
  function mapByCoords(lat, long){
    //displays map centered on lat, long
  }

  //displays the google map for the given zip
  function mapByZip(location){
    //convert zip to lat long
    //mapByCoords(lat, long);
  }

  //displays the google map for the given city
  function mapByCity(location){
    //convert city to lat long
    //mapByCoords(lat, long);
  }

  //empty and draw the sidebar
  function drawPlaces(){
    $places.empty();
    thePlaces.forEach(function(element){
      let thisOne = $("<li>")
                      .addClass("place")
                      .attr({
                        "data-lat": element.latitude, 
                        "data-long": element.longitude
                      })
                      .text(element.place)
      $places.append(thisOne);
      $hamburger.append(thisOne);
    });
  }

  //  EVENT LISTENERS

  //when search is clicked, return the map of that location and add to recent
  // $(document).on("click", $search, function(){
  //   let inputString = $input.text.trim();
  //   $input.text = "";
  //   if (recentPlaces === null){
  //     recentPlaces = [inputString];
  //   }
  //   else {
  //     recentPlaces.unshift("inputString");
  //   }

  //   showRecent();

  //   if ($.isNumeric(inputString)){
  //     mapByZip(inputString);
  //   }
  //   else {
  //     mapByCity(inputString);
  //   } 
  
  // });

  //when a saved location is clicked, show that location
  $(document).on("click", $(".place"), function(){
  //console.log(`${$(this).attr("data-lat")}, ${$(this).attr("data-long")} was clicked`);
  console.log(this);
  //  mapByCoords($(this).attr("data-lat"), $(this).attr("data-long"));
  });

  //when save is clicked, boot out one of the defaults and add to recent/saved
  //when reset recent is clicked, empty that div and clear local
  //when dog div is clicked, change the random dog

  drawPlaces();

});