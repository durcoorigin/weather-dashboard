// ****** Global Variables ******
var userFormEl = document.getElementById("user-form");
var locationInputEl = document.getElementById("user-location");


// ****** Get weather information ******
var getWeather = function(weatherLocation) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocation + "&APPID=9b044363d4a76eaed9d4e095ae5fa465";
    
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data){
        console.log(data);
        });
    });
};
// debugger;
// getWeather();

// ****** Form Event Handler ******
var formSubmitHandler = function(event) {
    eventPreventDefault();
    var weatherLocation = locationInputEl.value.trim();

    if (weatherLocation) {
        getWeather(weatherLocation);
        // locationInputEl.value = "";
    }
    // else {
    //     locationInputEl.value = "london,uk";
    // }
    console.log(weatherLocation);
}



// ****** Event Listeners ******
userFormEl.addEventListener("submit", formSubmitHandler);