$(document).ready(function() {

    let queryURL = 'https://api.thedogapi.com/v1/images/search';
    
    $.get(queryURL).then(function(response){

        //this will link to an img tag on our page with no src.
        let dogImg = $("#dog");
        dogImg.attr("src", response[0].url);

    })

})