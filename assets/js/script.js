// ****** Global Variables ******
var userFormEl = document.querySelector("#user-form");
var locationInputEl = document.querySelector("#user-location");


// ****** Display weather forecast ******
var displayWeather = function(data) {

  // ****** Display Today's Weather ******
  
  var cityName = data.city.name;
  var dateToday =  moment(data.list[0].dt_txt).format("MM/DD/YYYY");
  // var iconToday = weatherIcon[data.list[0].weather.icon];
  var tempToday =  data.list[0].main.temp;
  var humToday = data.list[0].main.humidity;
  var windToday = data.list[0].wind.speed;
  // var uvToday = data.list[0]

  document.getElementById("city").innerHTML = cityName;
  document.getElementById("date").innerHTML = dateToday;
  //document.querySelector(".icon").innerHTML = iconToday;
  document.getElementById("temp").innerHTML = tempToday;
  document.getElementById("humidity").innerHTML = humToday;
  document.getElementById("wind").innerHTML = windToday;
  // document.getElementById("uvIndex").innerHTML = uvToday;

  // ****** Display Tomorrow's Weather ******

  var dateTomorrow =  moment(data.list[7].dt_txt).format("MM/DD/YYYY");
  // var iconTomorrow = weatherIcon[data.list[7].weather.icon];
  var tempTomorrow =  data.list[7].main.temp;
  var humTomorrow = data.list[7].main.humidity;

  document.getElementById("date1").innerHTML = dateTomorrow;
  //document.getElementById("image1").innerHTML = iconTomorrow;
  document.getElementById("temp1").innerHTML = tempTomorrow;
  document.getElementById("humidity1").innerHTML = humTomorrow;

  // ****** Display Day 2 Weather ******

  var dateDay2 =  moment(data.list[15].dt_txt).format("MM/DD/YYYY");
  // var iconDay2 = weatherIcon[data.list[15].weather.icon];
  var tempDay2 =  data.list[15].main.temp;
  var humDay2 = data.list[15].main.humidity;

  document.getElementById("date2").innerHTML = dateDay2;
  //document.getElementById("image2").innerHTML = iconDay2;
  document.getElementById("temp2").innerHTML = tempDay2;
  document.getElementById("humidity2").innerHTML = humDay2;

  // ****** Display Day 3 Weather ******

  var dateDay3 =  moment(data.list[23].dt_txt).format("MM/DD/YYYY");
  // var iconDay3 = weatherIcon[data.list[24].weather.icon];
  var tempDay3 =  data.list[23].main.temp;
  var humDay3 = data.list[23].main.humidity;

  document.getElementById("date3").innerHTML = dateDay3;
  //document.getElementById("image3").innerHTML = iconDay3;
  document.getElementById("temp3").innerHTML = tempDay3;
  document.getElementById("humidity3").innerHTML = humDay3;

  // ****** Display Day 4 Weather ******

  var dateDay4 =  moment(data.list[31].dt_txt).format("MM/DD/YYYY");
  // var iconDay4 = weatherIcon[data.list[31].weather.icon];
  var tempDay4 =  data.list[31].main.temp;
  var humDay4 = data.list[31].main.humidity;

  document.getElementById("date4").innerHTML = dateDay4;
  //document.getElementById("image4").innerHTML = iconDay4;
  document.getElementById("temp4").innerHTML = tempDay4;
  document.getElementById("humidity4").innerHTML = humDay4;

  // ****** Display Day 5 Weather ******
  var dateDay5 =  moment(data.list[39].dt_txt).format("MM/DD/YYYY");
  // var iconDay5 = weatherIcon[data.list[39].weather.icon];
  var tempDay5 =  data.list[39].main.temp;
  var humDay5 = data.list[39].main.humidity;

  document.getElementById("date5").innerHTML = dateDay5;
  //document.getElementById("image5").innerHTML = iconDay5;
  document.getElementById("temp5").innerHTML = tempDay5;
  document.getElementById("humidity5").innerHTML = humDay5;

};

// ****** Get weather information ******
var getWeather = function(weatherLocation, weatherIcon) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + weatherLocation + '&units=imperial&appid=9b044363d4a76eaed9d4e095ae5fa465';
    
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {

        displayWeather(data);
        });
    });

  // Get WeatherIcons - try repeating the above function and push to displayWeather!! may create separate functions for additional pulls.
  //var weatherIcon = 'http://openweathermap.org/img/wn/10d@2x.png';

  // Get WeatherUvIndex - try repeating the above function and push to displayWeather
  //var weatherIcon = 'http://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37';
};


// ****** Form Event Handler ******
var formSubmitHandler = function(event) {

    event.preventDefault();
    var weatherLocation = locationInputEl.value.trim();

    if (weatherLocation) {
        locationInputEl.value = "";
    }

    // console.log(weatherLocation);
    getWeather(weatherLocation);

};



// ****** Event Listeners ******
userFormEl.addEventListener("submit", formSubmitHandler);