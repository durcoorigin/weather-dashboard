// ****** Global Variables ******
var userFormEl = document.querySelector("#user-form");
var locationInputEl = document.querySelector("#user-location");


// ****** Get weather information ******
var getWeather = function(weatherLocation) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + weatherLocation + '&units=imperial&appid=9b044363d4a76eaed9d4e095ae5fa465';
    
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data){
        console.log(data);
        });
    });
};


// ****** Form Event Handler ******
var formSubmitHandler = function(event) {
    // debugger;

    event.preventDefault();
    var weatherLocation = locationInputEl.value.trim();

    if (weatherLocation) {
        locationInputEl.value = "";
    }

    // console.log(weatherLocation);
    getWeather(weatherLocation);

}



// ****** Event Listeners ******
userFormEl.addEventListener("submit", formSubmitHandler);