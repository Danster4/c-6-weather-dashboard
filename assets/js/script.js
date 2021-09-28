var pastCityButtonContainer = document.querySelector("#pastCityButtonContainer");
var currentDayCardBody = document.querySelector("#currentDayCardBody");
var currentDate = moment().format("M/D/YYYY")
var plus1DayDate = moment().add(1, 'days').format("M/D/YYYY");
var plus2DaysDate = moment().add(2, 'days').format("M/D/YYYY");
var plus3DaysDate = moment().add(3, 'days').format("M/D/YYYY");
var plus4DaysDate = moment().add(4, 'days').format("M/D/YYYY");
var plus5DaysDate = moment().add(5, 'days').format("M/D/YYYY");


var plus1DayCard = document.querySelector("#plus1DayCard")
var plus2DaysCard = document.querySelector("#plus2DaysCard")
var plus3DaysCard = document.querySelector("#plus3DaysCard")
var plus4DaysCard = document.querySelector("#plus4DaysCard")
var plus5DaysCard = document.querySelector("#plus5DaysCard")


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
        console.log(data.daily[1].temp.day)

        $("#citySearchTextarea").val(" ")


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





        
        // make 5-Day Forecast Cards
        // Day +1 Card
        // create h5 date for Day +1 Card
        var datePlus1 = document.createElement("h5");
        datePlus1.setAttribute("class", "card-title text-light text-left date");
        datePlus1.innerHTML = plus1DayDate;
        plus1DayCard.appendChild(datePlus1);
        
        // create p Temp for Day +1 Card
        var datePlus1Temp = document.createElement('p');
        datePlus1Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
        datePlus1Temp.setAttribute("id", "cityTempToday");
        datePlus1Temp.innerHTML = "Temp: " + data.daily[1].temp.day;
        plus1DayCard.appendChild(datePlus1Temp);

        // create p Wind for Day +1 Card
        var datePlus1Wind = document.createElement('p');
        datePlus1Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
        datePlus1Wind.setAttribute("id", "cityWindToday");
        datePlus1Wind.innerHTML = "Wind: " + data.daily[1].wind_speed + " MPH";
        plus1DayCard.appendChild(datePlus1Wind);

        // create p Humidity for Day +1 Card
        var datePlus1Humidity = document.createElement('p');
        datePlus1Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
        datePlus1Humidity.setAttribute("id", "cityHumidityToday");
        datePlus1Humidity.innerHTML = "Humidity: " + data.daily[1].humidity + "%";
        plus1DayCard.appendChild(datePlus1Humidity);




        // Day +2 Card
        // create h5 date for Day +2
        var datePlus2 = document.createElement("h5");
        datePlus2.setAttribute("class", "card-title text-light text-left date");
        datePlus2.innerHTML = plus2DaysDate;
        plus2DaysCard.appendChild(datePlus2);
        
        // create p Temp for Day +2 Card
        var datePlus2Temp = document.createElement('p');
        datePlus2Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
        datePlus2Temp.setAttribute("id", "cityTempToday");
        datePlus2Temp.innerHTML = "Temp: " + data.daily[2].temp.day;
        plus2DaysCard.appendChild(datePlus2Temp);

        // create p Wind for Day +2 Card
        var datePlus2Wind = document.createElement('p');
        datePlus2Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
        datePlus2Wind.setAttribute("id", "cityWindToday");
        datePlus2Wind.innerHTML = "Wind: " + data.daily[2].wind_speed + " MPH";
        plus2DaysCard.appendChild(datePlus2Wind);

        // create p Humidity for Day +2 Card
        var datePlus2Humidity = document.createElement('p');
        datePlus2Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
        datePlus2Humidity.setAttribute("id", "cityHumidityToday");
        datePlus2Humidity.innerHTML = "Humidity: " + data.daily[2].humidity + "%";
        plus2DaysCard.appendChild(datePlus2Humidity);



        // Day +3 Card
        // create h5 date for Day +3
        var datePlus3 = document.createElement("h5");
        datePlus3.setAttribute("class", "card-title text-light text-left date");
        datePlus3.innerHTML = plus3DaysDate;
        plus3DaysCard.appendChild(datePlus3);
        
        // create p Temp for Day +3 Card
        var datePlus3Temp = document.createElement('p');
        datePlus3Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
        datePlus3Temp.setAttribute("id", "cityTempToday");
        datePlus3Temp.innerHTML = "Temp: " + data.daily[3].temp.day;
        plus3DaysCard.appendChild(datePlus3Temp);

        // create p Wind for Day +3 Card
        var datePlus3Wind = document.createElement('p');
        datePlus3Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
        datePlus3Wind.setAttribute("id", "cityWindToday");
        datePlus3Wind.innerHTML = "Wind: " + data.daily[3].wind_speed + " MPH";
        plus3DaysCard.appendChild(datePlus3Wind);

        // create p Humidity for Day +3 Card
        var datePlus3Humidity = document.createElement('p');
        datePlus3Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
        datePlus3Humidity.setAttribute("id", "cityHumidityToday");
        datePlus3Humidity.innerHTML = "Humidity: " + data.daily[3].humidity + "%";
        plus3DaysCard.appendChild(datePlus3Humidity);




        // Day +4 Card
        // create h5 date for Day +4
        var datePlus4 = document.createElement("h5");
        datePlus4.setAttribute("class", "card-title text-light text-left date");
        datePlus4.innerHTML = plus4DaysDate;
        plus4DaysCard.appendChild(datePlus4);
        
        // create p Temp for Day +4 Card
        var datePlus4Temp = document.createElement('p');
        datePlus4Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
        datePlus4Temp.setAttribute("id", "cityTempToday");
        datePlus4Temp.innerHTML = "Temp: " + data.daily[4].temp.day;
        plus4DaysCard.appendChild(datePlus4Temp);

        // create p Wind for Day +4 Card
        var datePlus4Wind = document.createElement('p');
        datePlus4Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
        datePlus4Wind.setAttribute("id", "cityWindToday");
        datePlus4Wind.innerHTML = "Wind: " + data.daily[4].wind_speed + " MPH";
        plus4DaysCard.appendChild(datePlus4Wind);

        // create p Humidity for Day +4 Card
        var datePlus4Humidity = document.createElement('p');
        datePlus4Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
        datePlus4Humidity.setAttribute("id", "cityHumidityToday");
        datePlus4Humidity.innerHTML = "Humidity: " + data.daily[4].humidity + "%";
        plus4DaysCard.appendChild(datePlus4Humidity);



    
        // Day +5 Card
        // create h5 date for Day +5
        var datePlus5 = document.createElement("h5");
        datePlus5.setAttribute("class", "card-title text-light text-left date");
        datePlus5.innerHTML = plus5DaysDate;
        plus5DaysCard.appendChild(datePlus5);
        
        // create p Temp for Day +5 Card
        var datePlus5Temp = document.createElement('p');
        datePlus5Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
        datePlus5Temp.setAttribute("id", "cityTempToday");
        datePlus5Temp.innerHTML = "Temp: " + data.daily[5].temp.day;
        plus5DaysCard.appendChild(datePlus5Temp);

        // create p Wind for Day +5 Card
        var datePlus5Wind = document.createElement('p');
        datePlus5Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
        datePlus5Wind.setAttribute("id", "cityWindToday");
        datePlus5Wind.innerHTML = "Wind: " + data.daily[5].wind_speed + " MPH";
        plus5DaysCard.appendChild(datePlus5Wind);

        // create p Humidity for Day +5 Card
        var datePlus5Humidity = document.createElement('p');
        datePlus5Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
        datePlus5Humidity.setAttribute("id", "cityHumidityToday");
        datePlus5Humidity.innerHTML = "Humidity: " + data.daily[5].humidity + "%";
        plus5DaysCard.appendChild(datePlus5Humidity);

      });

    
  })
});

