var pastCityButtonContainer = document.querySelector("#pastCityButtonContainer");
var currentDayCardBody = document.querySelector("#currentDayCardBody");
var currentDate = moment().format("M/D/YYYY")


var reset = function() {

}



$(document).ready(function () {
  $("#search-btn").click(function() {
    
    console.log("I clicked button")
    // val() and trim() methods are used to get the values from
    // textarea and stored in ""Text variable
    var searchText = $("#citySearchTextarea").val().trim();
    // set the key/value pair in localStorage
    localStorage.setItem('citySearched', searchText);

    // create button below with name of city you just searched
    var pastCityButton = document.createElement("a")
    pastCityButton.setAttribute("class", "list-group-item list-group-item-action w-100 text-center bg-secondary text-light")
    pastCityButton.setAttribute("id", "citySearched[1]")
    pastCityButton.setAttribute("href", "#");
    pastCityButton.textContent = localStorage.getItem('citySearched')
    
    // append button to top of button container
    pastCityButtonContainer.appendChild(pastCityButton);

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?"
    + "lat=" + "33.44" 
    + "&lon=" + "-94.04"
    + "&units=imperial"
    + "&appid=be11e447ae5251b09dd8f2087ffbf394";
    
    fetch(apiUrl)
      // Convert the response to JSON
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        console.log(data.current.temp)


        // create h5 City Name for Current Day Box
        var cityNameEl = document.createElement('h5');
        cityNameEl.setAttribute("class", "card-title text-left city date fw-bold");
        cityNameEl.setAttribute("id", "cityName");
        cityNameEl.textContent = localStorage.getItem('citySearched') + " (" + currentDate + ")";
        currentDayCardBody.appendChild(cityNameEl);

        // create p Temp for Current Day Box
        var cityTempTodayEl = document.createElement('p');
        cityTempTodayEl.setAttribute("class", "card-text text-left tempCardInfo");
        cityTempTodayEl.setAttribute("id", "cityTempToday");
        cityTempTodayEl.innerHTML = "Temp: " + data.current.temp;
        currentDayCardBody.appendChild(cityTempTodayEl);

        // create p Wind for Current Day Box
        var cityWindTodayEl = document.createElement('p');
        cityWindTodayEl.setAttribute("class", "card-text text-left windCardInfo");
        cityWindTodayEl.setAttribute("id", "cityWindToday");
        cityWindTodayEl.innerHTML = "Wind: " + data.current.wind_speed + " MPH";
        currentDayCardBody.appendChild(cityWindTodayEl);

        // create p Humidity for Current Day Box
        var cityHumidityTodayEl = document.createElement('p');
        cityHumidityTodayEl.setAttribute("class", "card-text text-left humidityCardInfo");
        cityHumidityTodayEl.setAttribute("id", "cityHumidityToday");
        cityHumidityTodayEl.innerHTML = "Humidity: " + data.current.humidity + "%";
        currentDayCardBody.appendChild(cityHumidityTodayEl);

        // create p UVI for Current Day Box
        var cityUVIndexTodayEl = document.createElement('p');
        cityUVIndexTodayEl.setAttribute("class", "card-text text-left uVIndexCardInfo");
        cityUVIndexTodayEl.setAttribute("id", "cityUVIndexToday");
        cityUVIndexTodayEl.innerHTML = "UV Index: " + data.current.uvi;
        currentDayCardBody.appendChild(cityUVIndexTodayEl);

        citySearchTextarea.innerHTML = ""
      });

    
  })
});

