var pastCityButtonContainer = document.querySelector("#pastCityButtonContainer");



// var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?"
// + "lat=" + "{lat}" 
// + "&lon=" + "{lon}"
// + "&exclude={part}"
// + "&appid=be11e447ae5251b09dd8f2087ffbf394"



$(document).ready(function () {
  $("#search-btn").click(function() {
    console.log("I clicked button")
    // val() and trim() methods are used to get the values from
    // textarea and stored in ""Text variable
    var searchText = $("#citySearchTextarea").val().trim();
    // set the key/value pair in localStorage
    localStorage.setItem('citySearched', searchText);

    citySearchTextarea.textContent = "";

    // create button below with name of city you just searched
    var pastCityButton = document.createElement("a")
    pastCityButton.setAttribute("class", "list-group-item list-group-item-action w-100 text-center bg-secondary text-light")
    pastCityButton.setAttribute("href", "#");
    pastCityButton.textContent = localStorage.getItem('citySearched')


    pastCityButtonContainer.appendChild(pastCityButton)
  })
});

// fetch(apiUrl)
